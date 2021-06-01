import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import List from '@ckeditor/ckeditor5-list/src/list.js';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Link from '@ckeditor/ckeditor5-link/src/link';
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';

import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageInsert from '@ckeditor/ckeditor5-image/src/imageinsert';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';

import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';

import Font from '@ckeditor/ckeditor5-font/src/font';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import SimpleUploadAdapter from './simpleuploadadapter';

class ClassicEditor extends ClassicEditorBase {
}

ClassicEditor.builtinPlugins = [
    Essentials,
    Paragraph,
    Heading,
    Bold,
    Italic,
    Underline,
    Strikethrough,
    List,
    Link,
    CodeBlock,
    BlockQuote,

    Image,
    ImageInsert,
    ImageUpload,
    ImageResize,
    ImageStyle,
    ImageToolbar,
    ImageCaption,

    Table,
    TableToolbar,
    TableProperties,
    TableCellProperties,

    Font,
    RemoveFormat,
    MediaEmbed,
    SimpleUploadAdapter,
];

ClassicEditor.defaultConfig = {
    toolbar: {
        items: [
            'heading',
            '|',
            'bold',
            'italic',
            'link',
            'fontColor',
            'bulletedList',
            'numberedList',
            'removeFormat',
            '|',
            'codeBlock',
            'insertImage',
            'blockQuote',
            'insertTable',
            'mediaEmbed',
            'undo',
            'redo'
        ]
    },
    image: {
        styles: [
            'alignLeft', 'alignCenter', 'alignRight'
        ],
        resizeOptions: [
            {
                name: 'resizeImage:original',
                value: null,
                icon: 'original'
            },
            {
                name: 'resizeImage:50',
                value: '50',
                icon: 'medium'
            },
            {
                name: 'resizeImage:75',
                value: '75',
                icon: 'large'
            }
        ],
        toolbar: [
            'imageStyle:alignLeft', 'imageStyle:alignCenter', 'imageStyle:alignRight',
            '|',
            'resizeImage',
            '|',
            'imageTextAlternative'
        ]
    },
    codeBlock: {
        languages: [
            {language: 'php', label: 'PHP', class: 'language-php line-numbers'},
            {language: 'css', label: 'CSS', class: 'language-css line-numbers'},
            {language: 'javascript', label: 'JavaScript', class: 'language-javascript line-numbers'},
            {language: 'html', label: 'HTML', class: 'language-html line-numbers'},
            {language: 'sql', label: 'SQL', class: 'language-sql line-numbers'},
            {language: 'xml', label: 'XML', class: 'language-xml line-numbers'},
        ]
    },
    table: {
        contentToolbar: [
            'tableColumn',
            'tableRow',
            'mergeTableCells',
            'tableProperties',
            'tableCellProperties'
        ]
    },
    heading: {
        options: [
            {model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph'},
            {model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2'},
            {model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3'},
            {model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4'},
            {
                model: 'alertSuccess',
                view: {
                    name: 'div',
                    classes: ['alert', 'alert-success']
                },
                title: 'alert-success',
                class: 'alert alert-success',
            },
            {
                model: 'alertInfo',
                view: {
                    name: 'div',
                    classes: ['alert', 'alert-info']
                },
                title: 'alert-info',
                class: 'alert alert-success',
            },
            {
                model: 'alertDanger',
                view: {
                    name: 'div',
                    classes: ['alert', 'alert-danger']
                },
                title: 'alert-danger',
                class: 'alert alert-danger',
            },
            {
                model: 'alertWarning',
                view: {
                    name: 'div',
                    classes: ['alert', 'alert-warning']
                },
                title: 'alert-warning',
                class: 'alert alert-warning',
            }
        ]
    },
    simpleUpload: {
        // The URL that the images are uploaded to.
        uploadUrl: '',

        // Enable the XMLHttpRequest.withCredentials property.
        withCredentials: false,
        savedCallback: function (file) {
        },
    },
    language: 'en'
};

export default ClassicEditor;