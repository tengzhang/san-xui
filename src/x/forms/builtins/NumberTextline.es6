/**
 * @file inf-ui/x/forms/builtins/NumberTextline.es6
 * @author liyuan
 */

import NumberTextline from 'inf-ui/x/components/NumberTextline';

const tagName = 'ui-form-numbertextline';
export default {
    type: 'numbertextline',
    tagName,
    Component: NumberTextline,
    builder(item, prefix) {
        return `
            <${tagName}
                s-if="!preview"
                min="{{${prefix}.min}}"
                max="{{${prefix}.max}}"
                value="{=formData.${item.name}=}"
            />
            <span s-else>{{formData.${item.name}}}</span>`;
    }
};
