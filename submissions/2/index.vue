
<template>
  <div id="items">
    <h1>{{ groupedItems.name }}</h1>
    <div class="item">
      <h3>Items with Score 20</h3>
      <ul>
        <li>Item 6</li>
        <li>Item 4</li>
        <li>Item 3</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['items'],
  computed: {
    groupedItems: function() {
      return this.items;
    }
  }
}
</script>
