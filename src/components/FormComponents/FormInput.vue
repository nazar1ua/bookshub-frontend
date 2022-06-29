<template>
    <div>
        <label :for="name" class="block text-sm font-medium text-gray-700"><slot/></label>
        <div class="mt-1 relative rounded-md shadow-sm">
            <input
                :ref="name"
                :id="name"
                :name="name"
                :type="type"
                :value="modelValue"
                @input="$emit('update:modelValue', $event.target.value)"
                :autocomplete="autocomplete"
                :required="required"
                :minlength="minlength"
                :maxlength="maxlength"
                class="appearance-none block w-full py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm"
                :class="[
                    invalid
                    ? 'pl-3 pr-10 border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500'
                    : 'px-3 border-gray-300 placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500']"
            />
            <div v-if="invalid" class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <ExclamationCircleIcon class="h-5 w-5 text-red-500" aria-hidden="true" />
            </div>
        </div>
        <p v-if="invalid" class="mt-2 text-sm text-red-600" id="email-error">{{error}}</p>
    </div>
</template>

<script>
import { ExclamationCircleIcon } from '@heroicons/vue/solid'
import smoothReflow from 'vue-smooth-reflow'

export default {
    name: 'FormInput',
    components: {ExclamationCircleIcon},
    props: {
        name: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: false,
            default: 'text',
        },
        autocomplete: {
            type: String,
            required: false,
            default: '',
        },
        required: {
            type: Boolean,
            required: false,
            default: false,
        },
        error: {
            type: String,
            required: false,
            default: "Це поле є обов'язковим",
        },
        validated: {
            type: Boolean,
            required: true,
            default: false,
        },
        minlength: {
            type: String,
            required: false,
        },
        maxlength: {
            type: String,
            required: false,
        },
        modelValue: null,
    },
    emits: ['update:modelValue'],
    data() {
        return {
            invalid: false,
        }
    },
    mixins: [smoothReflow],
    mounted() {
        this.$smoothReflow({
            hideOverflow: false
        })
    },
    watch: {
        validated(newStatus, oldStatus) {
            const el = this.$refs[this.name];
            if (newStatus === true) {
                if (!el.checkValidity()) {
                    this.invalid = true
                    el.setAttribute('aria-invalid', true)
                    el.setAttribute('aria-describedby', 'email-error')
                    el.addEventListener('input', () => {
                        if (el.checkValidity()) {
                            this.invalid = false
                            el.removeAttribute('aria-invalid')
                            el.removeAttribute('aria-describedby')
                        } else {
                            this.invalid = true
                            el.setAttribute('aria-invalid', true)
                            el.setAttribute('aria-describedby', 'email-error')
                        }
                    })
                }
            }
        },
    }
}
</script>
