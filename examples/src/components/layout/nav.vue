<template>
  <div class="z-nav">
    <li class="z-nav-item" v-for="item in data" :key="item.path">
      <span class="z-nav-item__title">{{ item.name }}</span>
      <template v-if="item.groups">
        <div class="z-nav-group" v-for="group in item.groups" :key="group.path">
          <div class="z-nav-group__title">{{ group.groupName }}</div>
          <div class="z-nav-group-cotent">
            <li v-for="navItem in group.list" :key="navItem.path">
              <router-link class="z-nav-item__link"
                :to="'/component' + navItem.path"
                v-text="navItem.title">
              </router-link>
            </li>
          </div>
        </div>
      </template>
    </li>
  </div>
</template>

<script>
export default {
  props: {
    data: Array
  }
}
</script>

<style lang="scss" scoped>
.z-nav{
  &-item{
    &__title{
      font-size: 18px;
      line-height: 40px;
      font-weight: 600;
      color: #2c3e50;
    }
    &__link{
      line-height: 40px;
      font-size: 14px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      color: #444;
    }
  }
  &-group{
    margin-top: 15px;
    &__title{
      font-size: 12px;
      line-height: 26px;
      color: #999;
    }
  }
}
</style>


