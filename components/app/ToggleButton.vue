<template>
    <label :for="id + '_button'" :class="{'active': isActive}" class="toggle__button">
        <span v-if="isActive" class="toggle__label">{{ enableText }}</span>
        <span v-if="! isActive" class="toggle__label">{{ disabledText }}</span>

        <input type="checkbox" :disabled="disabled" :id="id + '_button'" v-model="checkedValue">
        <span class="toggle__switch"></span>
    </label>
</template>

<script>
export default {
    props: {
        disabled: {
            type: Boolean,
            default: false
        },
        labelEnableText: {
            type: String,
            default: ''
        },
        
        labelDisableText: {
            type: String,
            default: ''
        },
        id: {
            type: String,
            default: 'primary'
        }, 
        currentState: {
            type: Boolean,
            default: true
        }
    },
   
    watch: {
         currentState(new_val,old_val) {
              this.$emit('changeSwitch',new_val )
           
           
           
        }
    },
    computed: {
        // currentState() {
        //     return this.defaultState;
        // },
        isActive() {
            return this.currentState;
        },
        enableText() {
            return this.labelEnableText;
        },
        disabledText() {
            return this.labelDisableText;
        },
        checkedValue: {
            get() {
                return this.currentState;
            },
            set(newValue) {
                this.currentState = newValue;
                this.$emit('change', newValue);
            }
        }
    }
}
</script>

<style scoped>
.toggle__button {
    vertical-align: middle;
    user-select: none;
    cursor: pointer;
}
.toggle__button input[type="checkbox"] {
    opacity: 0;
    position: absolute;
    width: 1px;
    height: 1px;
}
.toggle__button .toggle__switch {
    display:inline-block;
    height:12px;
    border-radius:6px;
    width:40px;
    background: #fdaeaf;
    box-shadow: inset 0 0 1px #fdaeaf;
    position:relative;
    margin-left: 10px;
    transition: all .25s;
}
.toggle__button .toggle__switch::after, 
.toggle__button .toggle__switch::before {
    content: "";
    position: absolute;
    display: block;
    height: 18px;
    width: 18px;
    border-radius: 50%;
    left: 0;
    top: -3px;
    transform: translateX(0);
    transition: all .25s cubic-bezier(.5, -.6, .5, 1.6);
}
.toggle__button .toggle__switch::after {
    background: #fd5e63;
    box-shadow: 0 0 1px #666;
}
.toggle__button .toggle__switch::before {
    background: #fd5e63;
    box-shadow: 0 0 0 3px rgba(0,0,0,0.1);
    opacity:0;
}
.active .toggle__switch {
    background: #adadad;
    box-shadow: inset 0 0 1px #fbfbfb;
}
.active .toggle__switch::after,
.active .toggle__switch::before{
    transform:translateX(40px - 18px);
}
.active .toggle__switch::after {
    left: 23px;
    background: #fbfbfb;
    box-shadow: 0 0 1px #fbfbfb;
}
</style>