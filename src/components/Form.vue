<template>
    <div class="min-h-screen flex items-center justify-center">
        <form @submit.prevent="submitForm" class="bg-blue p-8 rounded shadow-md">
            <h2 class="text-2xl font-semibold mb-4">Contact Form</h2>

            <div class="mb-4">
                <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Name:</label>
                <input v-model="formData.name" type="text" id="name" name="name" placeholder="Enter your name"
                    class="w-full p-2 border rounded" />
                <span v-if="!isValidName" class="text-red-500 text-sm">Name is required</span>
            </div>

            <div class="mb-4">
                <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                <input v-model="formData.email" type="email" id="email" name="email" placeholder="Enter your email"
                    class="w-full p-2 border rounded" />
                <span v-if="!isValidEmail" class="text-red-500 text-sm">Please enter a valid email</span>
            </div>

            <div class="mb-6">
                <label for="message" class="block text-gray-700 text-sm font-bold mb-2">Message:</label>
                <textarea v-model="formData.message" id="message" name="message" rows="4"
                    placeholder="Type your message here" class="w-full p-2 border rounded"></textarea>
                <span v-if="!isValidMessage" class="text-red-500 text-sm">Message is required</span>
            </div>

            <button type="submit" class="bg-title text-white py-2 px-4 rounded flex items-center gap-2">Send a message<svg xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
                    <path
                        d="M2.87 2.298a.75.75 0 0 0-.812 1.021L3.39 6.624a1 1 0 0 0 .928.626H8.25a.75.75 0 0 1 0 1.5H4.318a1 1 0 0 0-.927.626l-1.333 3.305a.75.75 0 0 0 .811 1.022 24.89 24.89 0 0 0 11.668-5.115.75.75 0 0 0 0-1.175A24.89 24.89 0 0 0 2.869 2.298Z" />
                </svg>
            </button>
        </form>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            formData: {
                name: '',
                email: '',
                message: '',
            },
        };
    },
    computed: {
        isValidName() {
            return this.formData.name.trim() !== '';
        },
        isValidEmail() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(this.formData.email);
        },
        isValidMessage() {
            return this.formData.message.trim() !== '';
        },
    },
    methods: {
        submitForm() {
            if (this.isValidName && this.isValidEmail && this.isValidMessage) {
                // Form is valid, you can perform your submit logic here
                console.log('Form submitted:', this.formData);
            } else {
                // Form is not valid, you can handle validation errors here
                console.log('Form validation failed');
            }
        },
    },
};
</script>
  
<style scoped>
/* Add Tailwind CSS styles here if needed */
</style>
  