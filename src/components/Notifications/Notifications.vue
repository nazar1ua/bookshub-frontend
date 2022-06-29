<template>
    <teleport to="body">
        <div aria-live="assertive" class="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start">
            <div class="w-full flex flex-col items-center space-y-4 sm:items-end">
                <Notification
                    v-for="notification in notifications"
                    :key="notification.id"
                    show="true"
                    :status="notification.status"
                    :type="notification.type"
                    :title="notification.title"
                    :text="notification.text"
                />
            </div>
        </div>
    </teleport>
</template>

<script>
import Notification from './Notification.vue';
export default {
    name: "Notifications",
    props: {
        notifications: Array,
    },
    components: { Notification }
}
</script>
