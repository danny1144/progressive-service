<template>
  <div style="background: #ECECEC; padding: 30px">
    <a-row :gutter="16">
      <a-col :span="12">
        <a-card>
          <a-statistic
            title="Feedback"
            :value="11.28"
            :precision="2"
            suffix="%"
            :value-style="{ color: '#3f8600' }"
            style="margin-right: 50px"
          >
            <template v-slot:prefix>
              <arrow-up-outlined />
            </template>
          </a-statistic>
        </a-card>
      </a-col>
      <a-col :span="12">
        <a-card>
          <a-statistic
            title="Idle"
            :value="9.3"
            :precision="2"
            suffix="%"
            class="demo-class"
            :value-style="{ color: '#cf1322' }"
          >
            <template v-slot:prefix>
              <arrow-down-outlined />
            </template>
          </a-statistic>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons-vue';
export default {
  components: {
    ArrowUpOutlined,
    ArrowDownOutlined,
  },
};
</script>
