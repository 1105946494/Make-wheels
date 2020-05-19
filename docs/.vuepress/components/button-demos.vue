<template>
  <div>
    <j-button>默认按钮</j-button>
    <j-button icon="ishezhi">默认按钮</j-button>
    <j-button :loading="true">默认按钮</j-button>
    <j-button disabled>默认按钮</j-button>

    <pre>
        <code>
        {{content}}
        </code>
    </pre>
  </div>
</template>

<script>
import Button from "../../../src/button";

export default {
  components: {
    "j-button": Button,
  },
  data() {
    return {
      content: `
    <j-button>默认按钮</j-button>
    <j-button icon="ishezhi">默认按钮</j-button>
    <j-button :loading="true">默认按钮</j-button>
    <j-button disabled>默认按钮</j-button>
          `,
    };
  },
};
</script>
