<template>
  <div class="icon_box">
    <div v-for="item in iconList" :key="item">
      <d-icon :class="item" :size="20" />
      <p>{{ item }}</p>
    </div>
  </div>
</template>
<script setup>
import { computed, ref, watch, unref, watchEffect, reactive, onMounted, nextTick, useAttrs, useSlots } from 'vue';
import { ElInput, ElIcon, ElInputNumber } from 'element-plus';
import { AddLocation, Aim, AlarmClock, Apple, ArrowDownBold } from '@element-plus/icons-vue';

let iconList = ref(['AddLocation', 'Aim', 'AlarmClock', 'Apple', 'ArrowDown', 'ArrowDownBold', 'ArrowLeft', 'ArrowLeftBold', 'ArrowRight', 'ArrowRightBold', 'ArrowUp', 'ArrowUpBold', 'Avatar', 'Back', 'Baseball', 'Basketball', 'Bell', 'BellFilled', 'Bicycle', 'Bottom', 'BottomLeft', 'BottomRight', 'Bowl', 'Box', 'Briefcase', 'Brush', 'BrushFilled', 'Burger', 'Calendar', 'Camera', 'CameraFilled', 'CaretBottom', 'CaretLeft', 'CaretRight', 'CaretTop', 'Cellphone', 'ChatDotRound', 'ChatDotSquare', 'ChatLineRound', 'ChatLineSquare', 'ChatRound', 'ChatSquare', 'Check', 'Checked', 'Cherry', 'Chicken', 'CircleCheck', 'CircleCheckFilled', 'CircleClose', 'CircleCloseFilled', 'CirclePlus', 'CirclePlusFilled', 'Clock', 'Close', 'CloseBold', 'Cloudy', 'Coffee', 'CoffeeCup', 'Coin', 'ColdDrink', 'Collection', 'CollectionTag', 'Comment', 'Compass', 'Connection', 'Coordinate', 'CopyDocument', 'Cpu', 'CreditCard', 'Crop', 'DArrowLeft', 'DArrowRight', 'DCaret', 'DataAnalysis', 'DataBoard', 'DataLine', 'Delete', 'DeleteFilled', 'DeleteLocation', 'Dessert', 'Discount', 'Dish', 'DishDot', 'Document', 'DocumentAdd', 'DocumentChecked', 'DocumentCopy', 'DocumentDelete', 'DocumentRemove', 'Download', 'Drizzling', 'Edit', 'EditPen', 'Eleme', 'ElemeFilled', 'ElementPlus', 'Expand', 'Failed', 'Female', 'Files', 'Film', 'Filter', 'Finished', 'FirstAidKit', 'Flag', 'Fold', 'Folder', 'FolderAdd', 'FolderChecked', 'FolderDelete', 'FolderOpened', 'FolderRemove', 'Food', 'Football', 'ForkSpoon', 'Fries', 'FullScreen', 'Goblet', 'GobletFull', 'GobletSquare', 'GobletSquareFull', 'Goods', 'GoodsFilled', 'Grape', 'Grid', 'Guide', 'Headset', 'Help', 'HelpFilled', 'Hide', 'Histogram', 'HomeFilled', 'HotWater', 'House', 'IceCream', 'IceCreamRound', 'IceCreamSquare', 'IceDrink', 'IceTea', 'InfoFilled', 'Iphone', 'Key', 'KnifeFork', 'Lightning', 'Link', 'List', 'Loading', 'Location', 'LocationFilled', 'LocationInformation', 'Lock', 'Lollipop', 'MagicStick', 'Magnet', 'Male', 'Management', 'MapLocation', 'Medal', 'Menu', 'Message', 'MessageBox', 'Mic', 'Microphone', 'MilkTea', 'Minus', 'Money', 'Monitor', 'Moon', 'MoonNight', 'More', 'MoreFilled', 'MostlyCloudy', 'Mouse', 'Mug', 'Mute', 'MuteNotification', 'NoSmoking', 'Notebook', 'Notification', 'Odometer', 'OfficeBuilding', 'Open', 'Operation', 'Opportunity', 'Orange', 'Paperclip', 'PartlyCloudy', 'Pear', 'Phone', 'PhoneFilled', 'Picture', 'PictureFilled', 'PictureRounded', 'PieChart', 'Place', 'Platform', 'Plus', 'Pointer', 'Position', 'Postcard', 'Pouring', 'Present', 'PriceTag', 'Printer', 'Promotion', 'QuestionFilled', 'Rank', 'Reading', 'ReadingLamp', 'Refresh', 'RefreshLeft', 'RefreshRight', 'Refrigerator', 'Remove', 'RemoveFilled', 'Right', 'ScaleToOriginal', 'School', 'Scissor', 'Search', 'Select', 'Sell', 'SemiSelect', 'Service', 'SetUp', 'Setting', 'Share', 'Ship', 'Shop', 'ShoppingBag', 'ShoppingCart', 'ShoppingCartFull', 'Smoking', 'Soccer', 'SoldOut', 'Sort', 'SortDown', 'SortUp', 'Stamp', 'Star', 'StarFilled', 'Stopwatch', 'SuccessFilled', 'Sugar', 'Suitcase', 'Sunny', 'Sunrise', 'Sunset', 'Switch', 'SwitchButton', 'TakeawayBox', 'Ticket', 'Tickets', 'Timer', 'ToiletPaper', 'Tools', 'Top', 'TopLeft', 'TopRight', 'TrendCharts', 'Trophy', 'TurnOff', 'Umbrella', 'Unlock', 'Upload', 'UploadFilled', 'User', 'UserFilled', 'Van', 'VideoCamera', 'VideoCameraFilled', 'VideoPause', 'VideoPlay', 'View', 'Wallet', 'WalletFilled', 'Warning', 'WarningFilled', 'Watch', 'Watermelon', 'WindPower', 'ZoomIn', 'ZoomOut']);
</script>
<style lang="less" scoped>
  .icon_box{
    border-top: 1px solid #dcdfe6;
    border-left: 1px solid #dcdfe6;
    display: flex;
    flex-wrap: wrap;
    & > div{
      width: 114px;
      height: 90px;
      padding-top: 10px;
      box-sizing: border-box;
      border-right: 1px solid #dcdfe6;
      border-bottom: 1px solid #dcdfe6;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
    & > div:hover{
      background-color: #f2f6fc;
      color: #0455da;
      ::v-deep(.el-icon){
        color: #0455da!important;
      }
    }
  }
</style>