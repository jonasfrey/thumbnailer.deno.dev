
import {
    f_add_css,
    f_s_css_prefixed,
    o_variables, 
    f_s_css_from_o_variables
} from "https://deno.land/x/f_add_css@2.0.0/mod.js"

import {
    f_o_html_from_o_js,
} from "https://deno.land/x/handyhelpers@5.4.2/mod.js"


import { createApp, ref, onUpdated } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'



// import { Boolean } from '/three.js-r126/examples/jsm/math/BooleanOperation.js';
// import { STLExporter } from '/three/STLExporter.js';
// if you need more addons/examples download from here...
//  
let s_id_error_msg = 'error_msg'
o_variables.n_rem_font_size_base = 1. // adjust font size, other variables can also be adapted before adding the css to the dom
o_variables.n_rem_padding_interactive_elements = 0.5; // adjust padding for interactive elements 
let a_s_font_family = [
    'Arial',
    'Courier New',
    'ManuskriptGotisch',
]
f_add_css(
    `

  @font-face {
    font-family: ManuskriptGotisch;
    src: url(./ManuskriptGotisch.ttf);
  }

    body{
        min-height: 100vh;
        min-width: 100vw;
    }
    #${s_id_error_msg}{
        position: absolute;
        width: 100%;
        top: 0;
        background: #f5c0c099;
        color: #5e0505;
        padding: 1rem;
        z-index: 111;
    }
    .app *{
        -webkit-user-drag: none;
        user-drag: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .no-drag {
        -webkit-user-drag: none;
        user-drag: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    ${
        f_s_css_from_o_variables(
            o_variables
        )
    }

    .a_o_item.layers{
        box-sizing: border-box;
        position: fixed;
        flex: 1 1 auto;
        top: 0;
        right: 0;
        width: 20%;
        max-width: 20%;
        height: 100%;
        background: rgba(22,22,22,0.8);
        padding: 1rem;
        display: flex;
        flex-direction: column;
    }
    .imgcont{
        max-width: 100%;
        max-height: 100%;
        flex: 1 1 auto;
        border: 1px solid red;

    }
    .imgcont img {
        width: 100%;
        height: 100%;
    }
    label{
        width:100%;
        }
    .canvasses{
        width: 80%;
    }
    .overlay{
        position: fixed;
        top:0;
        left:0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100vw;
        height: 100vh;
        background: rgba(0,0,0,0.5);
        z-index: 100;
        padding: 1rem;
        box-sizing: border-box;
        backdrop-filter: blur(5px);
        border-radius: 1rem;
        border: 1px solid rgba(255,255,255,0.5);
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
        color: white;
        font-size: 1.5rem;
        font-weight: bold;
        font-family: 'Courier New', Courier, monospace;
        text-align: center;
        z-index: 100;           
    }
    .overlay div{

        flex: 1; /* Makes items grow equally to fill space */
        min-height: 100px; /* Sets minimum height */
        min-width: 100px; /* Sets minimum width */
        background-color: #3498db; /* Your desired background color */
        border: 1px solid #2980b9; /* Optional border for better visibility */

    }
    .item.active{
        outline: 2px solid green;
    }
    button:disabled{
        opacity: 0.5;
        cursor: not-allowed;
    }

    .app{
        position: absolute;
        height: 100vh; 
        width: 100vw;
        display: flex;
        flex-direction: row;
        overflow: hidden;
    }
    *{
        box-sizing: border-box;
    }
    .animated-border {
        border: 2px solid;
        border-radius: 4px;
        animation: pulse 2s infinite;
    }

    @keyframes pulse {
    0% { border-color: #ff0000; }
    50% { border-color: #0000ff; }
    100% { border-color: #ff0000; }
    }
    .inputs{
        position:absolute;
        top: 0;
        left: 0;
        z-index: 1000;
    }
    html, body {
    overflow: hidden;
    position: fixed;
    width: 100%;
    height: 100%;
    touch-action: none;
    overscroll-behavior: none;
    }
    .b_show_text{
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        left: 0;
        z-index: 1000;
        background: rgba(255,255,255,0.8);
        padding: 1rem;
        border-radius: 1rem;
        backdrop-filter: blur(5px);
    }
    `
);

let f_o_item = function(
    {
        s_text = '', 
        s_src_img = '',
        s_scl = 1,
        n_trn_x = 0, 
        n_trn_y = 0, 
        s_font_family = 'Arial', 
        s_color_bg = 'transparent', 
        s_color_font = 'red', 
        s_color_outline = 'black', 
        n_size_pixel_outline = 20, 
        n_scl_x_px_image = 0,
        n_scl_y_px_image = 0,
        n_scl_factor = 1,
    }
){
    return { 
        s_text,
        s_src_img,
        s_scl,
        n_trn_x,
        n_trn_y,
        s_font_family,
        s_color_bg,
        s_color_font,
        s_color_outline,
        n_size_pixel_outline,
        n_scl_x_px_image,
        n_scl_y_px_image,
        n_scl_factor
    }
}

let f_callback_beforevaluechange = function(a_s_path, v_old, v_new){
    // console.log('a_s_path')
    // console.log(a_s_path)
    // let s_path = a_s_path.join('.');
    // if(s_path == 'a_o_person.0.s_name'){
    //     console.log('name of first person will be changed')
    // }
}
let f_callback_aftervaluechange = function(a_s_path, v_old, v_new){
    // console.log('a_s_path')
    // console.log(a_s_path)
    // let s_path = a_s_path.join('.');
    // if(s_path == 'n_thickness'){
    //     f_update_rendering();
    // }
}


let o_div = document;
let o_blob_stl = null;
let a_o_license = await(await fetch('https://api.sketchfab.com/v3/licenses')).json()
let a_o_category = await(await(fetch('https://api.sketchfab.com/v3/categories'))).json()
let a_o_pixel_black= []; // we dont need a proxy of this large array
let f_o_aspect_ratio = function(
    s_ratio = '4/3',
    s_description = 'Makerworld Desktop'
){
    return {
        s_ratio, 
        s_description,
        n_ratio: parseFloat(s_ratio.split('/')[0]) / parseFloat(s_ratio.split('/')[1]),
    }
}
let a_o_aspect_ratio =[
    f_o_aspect_ratio(
        '4/3', 'Makerworld Desktop',
    ),
    f_o_aspect_ratio(
        '3/4', 'Makerworld Mobile',
    ),
    f_o_aspect_ratio(
        '1/1', 'Square',
    )
]
let o_bcr_bgimg = {width:0};

let o_state = {
    b_show_active_layer: true,
    a_s_font_family, 
    s_font_family: a_s_font_family[0],
    b_show_text: false,
    s_text: "",
    n_trn_x_pointer_down: 0,
    n_trn_y_pointer_down: 0,
    a_o_item: [],
    o_item: null,
    b_pointer_down_left: false, 
    b_pointer_down_middle: false,
    b_pointer_down_right: false,
    activePointers: {}, // Track all active touch points
    initialDistance: null, // For pinch zoom
    b_pointer_down_left: false,
}

globalThis.o_state = o_state

let f_sleep_ms = async function(n_ms){
    return new Promise((f_res, f_rej)=>{
        setTimeout(()=>{
            return f_res(true)
        },n_ms)
    })
}

let f_add_tag = function(){
    if(o_state.s_tag != '' && !o_state.a_s_tag.find(s=>{return s == o_state.s_tag})){
        o_state.a_s_tag.push(o_state.s_tag)
        o_state.s_tag = ''
    }
}



let f_s_style = function(o_style){
    let s_style = `{${Object.keys(o_style).map(s=>{
        return `${s}: \`${o_style[s]}\``
    })}}`;
    return s_style;
}

let o = await f_o_html_from_o_js(
    {
        id: "app",
        // "v-on:pointerdown": "f_pointerdown",
        // "v-on:pointerup": "f_pointerup",
        // "v-on:pointermove": "f_pointermove",
        a_o: [
            {
                class: "inputs", 
                a_o: [
                        {
                            s_tag: "button",
                            innerText: "{{(b_show_active_layer) ? 'Hide' : 'Show'}} active layer",
                            "v-on:click": `b_show_active_layer = !b_show_active_layer;`,
                        },
                        {
                            s_tag: "button",
                            innerText: "🗑️",
                            "v-on:click": `f_delete_item`,
                        },
                        {
                            s_tag: "button",
                            innerText: "Layer 🔄",
                            "v-on:click": "o_item = a_o_item[(a_o_item.indexOf(o_item) + 1) % a_o_item.length]",
                        },
                        {
                            s_tag: "button",
                            innerText: "Text",
                            "v-on:click": `b_show_text = true;`,
                        },
                        {
                            "v-if": 'b_show_text',
                            s_tag: "div",
                            class: "b_show_text",
                            style: 'display:flex;flex-direction: column;',
                            a_o: [
                                {
                                    s_tag: 'input', 
                                    type: 'text',
                                    placeholder: 'Text',
                                    "v-model": "s_text",
                                    'v-on:input': "if(o_item){o_item.s_text = s_text; f_update_text()}",
                                },
                                {
                                    s_tag: "button",
                                    innerText: "Font family",
                                    'v-on:click': `s_font_family = a_s_font_family[(a_s_font_family.indexOf(s_font_family) + 1) % a_s_font_family.length]; if(o_item){o_item.s_font_family = s_font_family;}`,
                                    ":style": f_s_style({
                                        fontFamily: '${s_font_family}',
                                        fontSize: '1.5rem',
                                        fontWeight: 'bold',
                                        color: 'black',
                                        backgroundColor: 'white',
                                        padding: '0.5rem',
                                        borderRadius: '0.5rem',
                                        border: '1px solid black',
                                    }),
                                },
                                {
                                    s_tag: "button",
                                    innerText: "Colors",
                                    'v-on:click': `f_update_text_colors`,
                                    ":style": f_s_style({
                                        fontFamily: '${s_font_family}',
                                        fontSize: '1.5rem',
                                        color: '${o_item?.s_color_font}',
                                        backgroundColor: '${o_item?.s_color_bg}',
                                        borderRadius: '0.5rem',
                                        border: '1px solid black',
                                    }),
                                },
                                {
                                    s_tag: "button",
                                    innerText: "Close",
                                    "v-on:click": `b_show_text = false;f_update_text()`
                                }
                            ]
                        },
                        {
                            ref: 'fileInput',
                            style: 'display:none;',
                            s_tag: 'input',
                            type:"file",
                            accept: "image/*",
                            "v-on:change":"f_add_image",
                        },
                        {
                            s_tag: "button",
                            innerText: "Image 📷",
                            "v-on:click": 'f_trigger_file_input',
                        },
                        {
                            s_tag: "button",
                            innerText: "🔍 +",
                            "v-on:click": "f_scale_up",
                        },
                        {
                            s_tag: "button",
                            innerText: "🔍 -",
                            "v-on:click": "f_scale_down",
                        }, 
                        {
                            s_tag: "button",
                            innerText: "▽ Layer",
                            "v-on:click": "f_item_layer_down"
                        },
                        {
                            s_tag: "button",
                            innerText: "△ Layer",
                            "v-on:click": "f_item_layer_up"
                        }, 

                ]
            },
            {
                class: 'a_o_item',
                a_o: [
                    {
                        'v-for': 'o_item2 in a_o_item',
                        a_o: [
                            {
                                'v-if': 'o_item2?.s_src_img != ""',
                                s_tag: "img",
                                ":class":"{item: true,'animated-border': (b_show_active_layer && o_item2 == o_item), 'no-drag': true}",
                                ":style": f_s_style({
                                    position: 'absolute',
                                    left: '${o_item2.n_trn_x}px',
                                    top: '${o_item2.n_trn_y}px',
                                    width: '${o_item2.n_scl_x_px_image * o_item2.n_scl_factor}px',
                                    height: '${o_item2.n_scl_y_px_image * o_item2.n_scl_factor}px',
                                    zIndex: '${a_o_item.indexOf(o_item2)}',
                                }),
                                ":src": 'o_item2?.s_src_img',
                            }, 
                            {

                                'v-if': 'o_item2?.s_text != ""',
                                s_tag: "div",
                                ":class":"{item: true,'animated-border': (b_show_active_layer && o_item2 == o_item), 'no-drag': true}",
                                ":style": f_s_style({
                                    position: 'absolute',
                                    left: '${o_item2.n_trn_x}px',
                                    top: '${o_item2.n_trn_y}px',
                                    fontSize: '${o_item2.n_size_pixel_outline * o_item2.n_scl_factor}px',
                                    padding: '${o_item2.n_size_pixel_outline * o_item2.n_scl_factor/4}px',
                                    fontFamily: '${o_item2.s_font_family}',
                                    color: '${o_item2.s_color_font}',
                                    backgroundColor: '${o_item2.s_color_bg}',
                                    borderRadius: '${o_item2.n_size_pixel_outline * o_item2.n_scl_factor/20}px',
                                    zIndex: '${a_o_item.indexOf(o_item2)}',
                                }),
                                "innerText": '{{o_item2.s_text}}',
                            }
                        ]
                        
                        
                    },

                ]
            }
        ]
    }, 
    o_state
)

window.onmouseup = function(o_event){
    if(o_event.button == 0){o_state.b_pointer_down_left = false;} 
    if(o_event.button == 1){o_state.b_pointer_down_middle = false;} 
    if(o_event.button == 2){o_state.b_pointer_down_right = false;} 
}
document.body.appendChild(o);




const app = createApp({
    // $nextTick: () => {
    //     debugger
    // // Runs after the DOM has updated
    // // this.accessRenderedElement()
    // },
    mounted() {
        globalThis.o_vue = this;
        
        // Add window event listeners
        window.addEventListener('pointerdown', this.f_pointerdown);
        window.addEventListener('pointerup', this.f_pointerup);
        window.addEventListener('pointermove', this.f_pointermove);
    },
    beforeUnmount() {
        // Clean up event listeners when component is destroyed
        window.removeEventListener('pointerdown', this.f_pointerdown);
        window.removeEventListener('pointerup', this.f_pointerup);
        window.removeEventListener('pointermove', this.f_pointermove);
    },
  methods: {
    f_update_text_colors: function(){
        if(this?.o_item?.s_color_bg == 'black'){
            this.o_item.s_color_bg = 'white';
            this.o_item.s_color_font = 'black';
            this.o_item.s_color_outline = 'black';
            return;
        }
        if(this?.o_item?.s_color_bg == 'white'){
            this.o_item.s_color_bg = 'black';
            this.o_item.s_color_font = 'white';
            this.o_item.s_color_outline = 'black';
            return;
        }
    },
    f_trigger_file_input: function(){
        console.log(this.$refs.fileInput);
        this.$refs.fileInput.click();
    },
    f_scale_up: function(){
        if(this.o_item?.s_src_img != ''){
            this.o_item.n_scl_factor += 0.01;
        }
        if(this.o_item?.s_text != ''){
            this.o_item.n_size_pixel_outline += 3;
        }
    },
    f_scale_down: function(){
        if(this.o_item?.s_src_img != ''){
            this.o_item.n_scl_factor -= 0.01;
        }
        if(this.o_item?.s_text != ''){
            this.o_item.n_size_pixel_outline -= 3;
        }
    },
    f_update_text: function(){
        if(this?.o_item == null || this.o_item.s_text == ''){
            let o_item = f_o_item(
                    {
                        s_text : this.s_text, 
                        s_src_img : '',
                        s_scl : 1,
                        n_trn_x : window.innerWidth/2, 
                        n_trn_y : window.innerHeight/2, 
                        s_font_family : this.s_font_family, 
                        s_color_bg : 'white', 
                        s_color_font : 'black', 
                        s_color_outline : 'black', 
                        n_size_pixel_outline : 50, 
                        n_scl_x_px_image : 0,
                        n_scl_y_px_image : 0,
                        n_scl_factor : 1,
                    }
            );
            this.a_o_item.push(o_item);
            this.o_item = o_item;
        }
        if(this.o_item.s_text != ''){
            this.o_item.s_font_family = this.s_font_family;
            this.o_item.s_text = this.s_text;
        }
    },
    f_delete_item: function(){
        if(confirm('Are you sure you want to delete this item?')){
            this.a_o_item.splice(this.a_o_item.indexOf(this.o_item), 1);
            this.o_item = this.a_o_item[0] || null;
        }
    },
    f_item_layer_down: function(){
        if(this.o_item){
            let n_index = this.a_o_item.indexOf(this.o_item);
            if(n_index > 0){
                this.a_o_item.splice(n_index, 1);
                this.a_o_item.splice(n_index - 1, 0, this.o_item);
            }
        }
    },
    f_item_layer_up: function(){
        if(this.o_item){
            let n_index = this.a_o_item.indexOf(this.o_item);
            if(n_index < this.a_o_item.length - 1){
                this.a_o_item.splice(n_index, 1);
                this.a_o_item.splice(n_index + 1, 0, this.o_item);
            }
        }
    },
    f_pointerdown(o_event) {
      // Track this pointer
      this.activePointers[o_event.pointerId] = {
        x: o_event.clientX,
        y: o_event.clientY, 
        n_trn_x_down: o_event.clientX ,
        n_trn_y_down: o_event.clientY
      };
      if(this.o_item){
        this.o_item.n_trn_x_pointer_down = this.o_item.n_trn_x;
        this.o_item.n_trn_y_pointer_down = this.o_item.n_trn_y;
      }
      
      // Your existing button code
      if(o_event.button == 0) this.b_pointer_down_left = true;
      if(o_event.button == 1) this.b_pointer_down_middle = true;
      if(o_event.button == 2) this.b_pointer_down_right = true;
      
      // Check if we have two touches (for pinch zoom)
      if (Object.keys(this.activePointers).length === 2) {
        this.initialDistance = this.calculateDistance();
      }
    },
    f_pointerup(o_event) {
      // Remove this pointer
      delete this.activePointers[o_event.pointerId];
      this.initialDistance = null; // Reset pinch zoom
      
      // Your existing button code
      if(o_event.button == 0) this.b_pointer_down_left = false;
      if(o_event.button == 1) this.b_pointer_down_middle = false;
      if(o_event.button == 2) this.b_pointer_down_right = false;
    },
    f_pointermove(o_event) {
      // Update pointer position
      let o_pointer = this.activePointers[o_event.pointerId];
      if (o_pointer) {
        o_pointer = {
          x: o_event.clientX,
          y: o_event.clientY, 
          n_trn_x_down_move_delta: o_event.clientX - o_pointer.n_trn_x_down,
          n_trn_y_down_move_delta: o_event.clientY - o_pointer.n_trn_y_down
        };
      }
      
      // Handle single finger drag (your existing code)
      if(this.b_pointer_down_left && this.o_item && Object.keys(this.activePointers).length === 1) {
        // this.o_item.n_trn_x = o_event.clientX - (this.o_item.n_scl_x_px_image / 2 * this.o_item.n_scl_factor);
        // this.o_item.n_trn_y = o_event.clientY - (this.o_item.n_scl_y_px_image / 2 * this.o_item.n_scl_factor);
        this.o_item.n_trn_x = this.o_item.n_trn_x_pointer_down + o_pointer.n_trn_x_down_move_delta;
        this.o_item.n_trn_y = this.o_item.n_trn_y_pointer_down + o_pointer.n_trn_y_down_move_delta;
      }
      
      // Handle two-finger pinch zoom
      if (Object.keys(this.activePointers).length === 2 && this.initialDistance && this.o_item) {
        const currentDistance = this.calculateDistance();
        const scaleFactor = currentDistance / this.initialDistance;
        
        // Apply zoom (you may want to add min/max limits)
        this.o_item.n_scl_factor *= scaleFactor;
        
        // Update initial distance for next calculation
        this.initialDistance = currentDistance;
      }
    },
    calculateDistance() {
      const pointers = Object.values(this.activePointers);
      if (pointers.length < 2) return 0;
      
      const [p1, p2] = pointers;
      return Math.sqrt(
        Math.pow(p2.x - p1.x, 2) + 
        Math.pow(p2.y - p1.y, 2)
      );
    },

        f_add_image: function(o_event){
            let o_self = this;
            let o_file = o_event.target.files[0];
            if(o_file){
                let o_reader = new FileReader();
                o_reader.onload = function(o_event){
                    let s_data_url = o_event.target.result;
                    let o_img = new Image();
                    o_img.src = s_data_url;
                    o_img.onload = function(){
                        
                        let n_scl_factor = (window.innerWidth-100) / o_img.width;

                        let n_scl_x_px_image = o_img.width;
                        let n_scl_y_px_image = o_img.height;
                        let o_item = f_o_item(
                            {
                                s_text : '', 
                                s_src_img : s_data_url,
                                s_scl : 1,
                                n_trn_x : 0, 
                                n_trn_y : 0, 
                                s_font_family : '', 
                                s_color_bg : '', 
                                s_color_font : '', 
                                s_color_outline : '', 
                                n_size_pixel_outline : 0, 
                                n_scl_x_px_image : n_scl_x_px_image,
                                n_scl_y_px_image : n_scl_y_px_image,
                                n_scl_factor : n_scl_factor
                            }
                        );
                        o_self.a_o_item.push(o_item);
                        o_self.o_item = o_item;
                        
                    }
                }
                o_reader.readAsDataURL(o_file);
            }
        },

      },
  data() {
    return o_state
  }
})


// Vue.directive('on-render', {
//     inserted(el, binding) {
//       binding.value(el)
//     }
//   })

// Handle both mouse and touch events



app.mount('#app')

window.onpointer
