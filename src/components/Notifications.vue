<script setup lang="ts">
import IconNotificationBell from './icons/IconNotificationBell.vue';
import IconLike from './icons/IconLike.vue';
import IconComment from './icons/IconComment.vue';
import IconAt from './icons/IconAt.vue';
import IconFriendRequest from './icons/IconFriendRequest.vue';

</script>

<template>
    <div class="header">
        <i>
            <IconNotificationBell />
        </i>
        <h3>Notifications</h3>
    </div>

    <ul class="body">
        <li class="notification-card new">
            <i class="small-icon">
                <IconFriendRequest />
            </i>

            <h4>XxXDarkKnightXxX wants to be your friend!</h4>
        </li>

        <div class="divider">
            ↑ New updates ↑
        </div>

        <!-- a would-be component -->
        <li class="notification-card">
            <i>
                <IconLike />
            </i>

            <h4>XxXDarkKnightXxX liked your post.</h4>
        </li>

        <li class="notification-card">
            <i>
                <IconComment />
            </i>

            <h4>user12311123 commented your post.</h4>
        </li>

        <li class="notification-card">
            <i>
                <IconLike />
            </i>

            <h4>XxXDarkKnightXxX commented your post.</h4>
        </li>

        <li class="notification-card">
            <i>
                <IconLike />
            </i>

            <h4>GimmeGummies liked your post.</h4>
        </li>

        <li class="notification-card">
            <i>
                <IconLike />
            </i>

            <h4>Undermafia liked your post.</h4>
        </li>

        <li class="notification-card">
            <i>
                <IconAt />
            </i>

            <h4> Macus.trent mentioned you on a post.</h4>
        </li>
    </ul>
</template>

<style scoped>
.header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    height: 4.5rem;
    width: 100%;
    padding: 0;
    background-color: #181818;
}

.divider {
    display: flex;
    align-items: center;
    width: 95%;
    height: 1px;
    margin: 1rem auto;
    color: #42b883;
}

.divider::before,
.divider::after {
    flex: 1;
    content: '';
    padding: 1px;
    background-color: #42b883;
    margin: 5px;
}

.body {
    list-style-type: none;
    padding: 0 0.5rem;
    margin: 0;
    height: 89vh;
    overflow-y: auto;
}

i {
    width: 32px;
    height: 32px;
    color: gray;
}

h3 {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 0.4rem;
    color: var(--color-heading);
    margin-left: 0.4rem;
    width: fit-content;
    height: fit-content;
}

h4 {
    height: fit-content;
    width: fit-content;
    margin-left: 0.5rem;
}

.notification-card {
    padding: 0.4rem;
    background-color: #252525;
    border-radius: 5px;
    max-height: 2.5rem;
    display: flex;
    align-items: center;
}

.notification-card:not(:first-child) {
    margin: 0.5rem 0 0 0;
}

.notification-card.new {
    background-color: #529E7C;
    color: white;
}

.notification-card.new i {
    color: white;
}

.small-icon {
    height: 24px;
    width: 24px;
}
</style>