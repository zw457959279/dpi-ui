<template>
  <div :class="prefixCls" class="relative">
    <InputPassword
      v-if="showInput"
      v-bind="$attrs"
      allowClear
      :value="innerValueRef"
      @change="handleChange"
      :disabled="disabled"
    >
      <template #[item]="data" v-for="item in Object.keys($slots)">
        <slot :name="item" v-bind="data"></slot>
      </template>
    </InputPassword>
    <div :class="`${prefixCls}-bar`">
      <div :class="`${prefixCls}-bar--fill`" :data-score="getPasswordStrength"></div>
    </div>
  </div>
</template>

<script>
  import { defineComponent, computed, ref, watch, unref, watchEffect } from 'vue';
  import { Input } from 'ant-design-vue';
  import zxcvbn from 'zxcvbn';

  export default defineComponent({
    name: 'StrengthMeter',
    components: { InputPassword: Input.Password },
    props: {
      value: String,
      showInput: {
        type: Boolean,
        default: () => true
      },
      disabled: Boolean,
    },
    emits: ['score-change', 'change'],
    setup(props, { emit }) {
      const innerValueRef = ref('');
      const prefixCls = 'd-strength-meter'
      const getPasswordStrength = computed(() => {
        const { disabled } = props;
        if (disabled) return -1;
        const innerValue = unref(innerValueRef);
        const score = innerValue ? zxcvbn(unref(innerValueRef)).score : -1;
        emit('score-change', score);
        return score;
      });

      function handleChange(e) {
        innerValueRef.value = e.target.value;
      }

      watchEffect(() => {
        innerValueRef.value = props.value || '';
      });

      watch(
        () => unref(innerValueRef),
        (val) => {
          emit('change', val);
        }
      );

      return {
        getPasswordStrength,
        handleChange,
        prefixCls,
        innerValueRef,
      };
    },
  });
</script>
<style lang="less" scoped>
  @prefix-cls: ~'d-strength-meter';

  .@{prefix-cls} {
    &-bar {
      position: relative;
      height: 6px;
      margin: 10px auto 6px;
      background-color: #eee;
      border-radius: 6px;

      &::before,
      &::after {
        position: absolute;
        z-index: 10;
        display: block;
        width: 20%;
        height: inherit;
        background-color: transparent;
        border-color: #fff;
        border-style: solid;
        border-width: 0 5px 0 5px;
        content: '';
      }

      &::before {
        left: 20%;
      }

      &::after {
        right: 20%;
      }

      &--fill {
        position: absolute;
        width: 0;
        height: inherit;
        background-color: transparent;
        border-radius: inherit;
        transition: width 0.5s ease-in-out, background 0.25s;

        &[data-score='0'] {
          width: 20%;
          background-color: darken(red, 10%);
        }

        &[data-score='1'] {
          width: 40%;
          background-color: red;
        }

        &[data-score='2'] {
          width: 60%;
          background-color: yellow;
        }

        &[data-score='3'] {
          width: 80%;
          background-color: fade(green, 50%);
        }

        &[data-score='4'] {
          width: 100%;
          background-color: green;
        }
      }
    }
  }
</style>