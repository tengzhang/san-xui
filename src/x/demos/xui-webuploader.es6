/**
 * @file demos/xui-webuploader.es6
 * @author leeight
 */

import {defineComponent} from 'san';
import WebUploader from 'inf-ui/x/components/WebUploader';
import Switch from 'inf-ui/x/components/Switch';
import Toast from 'inf-ui/x/components/Toast';

import Row from './Row';

/* eslint-disable */
const template = `<template>

<x-row label="initialize error">
    <xui-webuploader />
</x-row>

<x-row label="[default]">
    <xui-webuploader
        url="/api/null/upload"
        on-accept="onAccept($event)"
        />
</x-row>

<x-row label="jpg,gif,png;auto-start=false;multiple=true;options=...">
    <xui-webuploader
        url="/api/null/upload"
        auto-start="{{false}}"
        multiple
        label="请选择图片"
        options="{{uploader.options}}"
        />
</x-row>

<x-row label="disabled">
    <xui-switch checked="{=uploader.disabled=}" />
    <xui-webuploader
        disabled="{=uploader.disabled=}"
        url="/api/null/upload"
        />
</x-row>

</template>`;
/* eslint-enable */

export default defineComponent({
    template,
    components: {
        'x-row': Row,
        'xui-switch': Switch,
        'xui-webuploader': WebUploader
    },
    initData() {
        return {
            uploader: {
                disabled: true,
                options: {
                    accept: {
                        title: 'Files',
                        extensions: 'jpg,jpeg,gif,png',
                        mimeTypes: 'image/jpeg,image/gif,image/png'
                    }
                }
            }
        };
    },
    onAccept(event) {
        const ret = event.ret;
        if (ret.success) {
            Toast.success('上传成功');
        }
    }
});