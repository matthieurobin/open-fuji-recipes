<script>
  import { _ } from 'svelte-i18n';

  import Panel        from '../../components/panel.svelte';
  import RecipeParam  from './_recipe-param.svelte';
  import RecipeSlider from './_recipe-slider.svelte';

  export let recipe;

  /**
 * Format numeric vlaue by adding + in front of value if > 0
 * @param {Number} valueToFormat
 */
  function formatNumerciValue (valueToFormat) {
    if (valueToFormat <= 0) {
      return valueToFormat;
    }

    return '+' + valueToFormat;
  }
</script>

<Panel on:close>
  <svelte:fragment slot="title">
    { recipe.name }
  </svelte:fragment>

  <RecipeSlider recipe={ recipe } />

  <div class="mt-2 grid grid-cols-1 gap-y-2.5">
    <RecipeParam>
      <span slot="name">{ $_('recipe.film') }</span>
      <span slot="value">{ recipe.film }</span>
    </RecipeParam>

    <RecipeParam>
      <span slot="name">{ $_('recipe.simulationType') }</span>
      <span slot="value">{ $_(recipe.type) }</span>
    </RecipeParam>

    <RecipeParam>
      <span slot="name">{ $_('recipe.grain') }</span>
      <span slot="value">{ $_(recipe.grain) }</span>
    </RecipeParam>

    <RecipeParam>
      <span slot="name">{ $_('recipe.dynamicRange') }</span>
      <span slot="value">{ recipe.dr }</span>
    </RecipeParam>

    <RecipeParam>
      <span slot="name">{ $_('recipe.whiteBalance') }</span>
      <span slot="value">{ recipe.wb }, { formatNumerciValue(recipe.wbr) } { $_('recipe.red') } & { formatNumerciValue(recipe.wbb) } { $_('recipe.blue') }</span>
    </RecipeParam>

    <RecipeParam>
      <span slot="name">{ $_('recipe.hTone') }</span>
      <span slot="value">{ formatNumerciValue(recipe['h-tone']) }</span>
    </RecipeParam>

    <RecipeParam>
      <span slot="name">{ $_('recipe.sTone') }</span>
      <span slot="value">{ formatNumerciValue(recipe['s-tone']) }</span>
    </RecipeParam>

    <RecipeParam>
      <span slot="name">{ $_('color') }</span>
      <span slot="value">{ formatNumerciValue(recipe.color) }</span>
    </RecipeParam>

    <RecipeParam>
      <span slot="name">{ $_('recipe.sharp') }</span>
      <span slot="value">{ formatNumerciValue(recipe.sharp) }</span>
    </RecipeParam>

    <RecipeParam>
      <span slot="name">{ $_('recipe.noiseReduction') }</span>
      <span slot="value">{ formatNumerciValue(recipe.nr) }</span>
    </RecipeParam>

    <RecipeParam>
      <span slot="name">{ $_('recipe.clarity') }</span>
      <span slot="value">{ formatNumerciValue(recipe.clarity) }</span>
    </RecipeParam>

    <RecipeParam>
      <span slot="name">{ $_('recipe.ev') }</span>
      <span slot="value">{ recipe.ev }</span>
    </RecipeParam>

    {#if recipe.sensor >= 4 }
      <RecipeParam>
        <span slot="name">{ $_('recipe.colorCromeEffect') }</span>
        <span slot="value">{ $_(recipe.ccfx) }</span>
      </RecipeParam>
    {/if}

    {#if recipe.sensor >= 4 }
      <RecipeParam>
        <span slot="name">{ $_('recipe.colorCromeFxBlue') }</span>
        <span slot="value">{ $_(recipe.ccfxb) }</span>
      </RecipeParam>
    {/if}

    <RecipeParam>
      <span slot="name">{ $_('recipe.xTrans') }</span>
      <span slot="value">{ recipe.sensor }</span>
    </RecipeParam>

    <div class="pb-4">
      <span>{ $_('created') } { recipe.creator }</span>
    </div>
  </div>
</Panel>

