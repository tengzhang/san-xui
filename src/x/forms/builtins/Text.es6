/**
 * @file san-xui/x/forms/builtins/Text.es6
 * @author leeight
 */

import TextBox from '../../components/TextBox';

const tagName = 'ui-form-textbox';

export default {
    type: 'text',
    tagName,
    Component: TextBox,
    builder(item, prefix) {
        return `
            <${tagName}
                s-if="!preview"
                type="text"
                multiline="{{${prefix}.multiline}}"
                width="{{${prefix}.width}}"
                placeholder="{{${prefix}.placeholder}}"
                value="{=formData.${item.name}=}"
            />
            <span s-else>{{formData.${item.name}}}</span>`;
    }
};