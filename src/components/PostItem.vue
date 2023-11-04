<script setup lang="ts">
    import type { PropType } from 'vue';
    import type { PostItem } from '../interfaces/PostItem'
    import IconLike from './icons/IconLike.vue';
    import IconShare from './icons/IconShare.vue';
    import IconSave from './icons/IconSave.vue';
    
    const props = defineProps({
        post: Object as PropType<PostItem>
    })
</script>

<template>
    <li class="post-card" :style='{backgroundImage: `url(src/assets/images/${props.post?.pictureUrl})`}'>

        <div class="actions">
            <span class="button ml-auto" tooltip="Save">
                <IconSave class="sm-icon" />
            </span>

            <span class="button" tooltip="Share">
                <IconShare class="sm-icon" />
            </span>
        </div>

        <div class="tags">
            <span class="tag" v-for="tag in props.post?.tags">
                {{ tag }}
            </span>
        </div>
        
        <div class="details">
            <h3 class="title">{{ props.post?.title }}</h3>
            <p class="sneakpeek">{{ props.post?.sneakpeek }}</p>
            <div class="footer">
                <p class="author">{{ props.post?.author }}</p>
                <div class="ml-5 flex w-fit">
                    <i>
                        <IconLike class="smaller-icon" />
                    </i>
                    <p class="likes">
                        {{ props.post?.likes }}
                    </p>
                </div>
                <p class="published">{{ props.post?.published }}</p>
            </div>
        </div>
    </li>
</template>

<style scoped>

    p {
        height: fit-content;
        width: fit-content;
    }

    .post-card {
        height: 20rem;
        width: 100%;
        border-radius: 15px;
        margin: 0 0 1rem 0;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        flex-wrap: nowrap;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        
        background-color: aqua;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .actions {
        display: flex;
        flex-direction: row;
        gap: 10px;
        padding: 0.5rem;
    }

    .actions .button {
        position: relative;
        padding: 0 9px;
        display: inline-flex;
        align-items: center;
        background-color: #42b883;
        border-radius: 50%;
        color: black;
        width: 36px;
        height: 36px;
        transition: width 300ms ease-in-out 0s, border-radius 300ms linear 200ms;
        overflow: hidden;
        cursor: pointer;
    }

    .actions .button:hover {
        border-radius: 5px;
        width: 142px;
        transition: width 300ms ease-in-out 0s, border-radius 300ms linear 200ms;
    }

    .actions .button:after {
        content: attr(tooltip);
        position: absolute;
        margin: 0.6rem 0 0 3.5rem;
        width: fit-content;
        animation: fadeIn 600ms linear forwards;
    }

    .tags {
        display: flex;
        align-items: flex-end;
        gap: 10px;
        padding: 0.5rem;
        height: 70%;
    }

    .tags .tag {
        height: fit-content;
        width: fit-content;
        background-color: orange;
        color: white;
        font-weight: 600;
        padding: 0 0.3rem;
        border-radius: 5px;
    }

    .details {
        padding: 0.5rem;
        height: 7rem;
        border-radius: 0 0 13px 13px;
        background-color: #282828;
    }

    .details .footer {
        bottom: 0;
        margin-top: 1.5rem;
        display: flex;
        height: fit-content;
    }

    .details .title {
        color: white;
        font-weight: 600;
        height: fit-content;
    }

    .details .sneakpeek {
        font-size: 14px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        color: white;
        height: fit-content;
    }

    .details .author {
        font-size: 12px;
    }

    .details .published {
        margin-left: auto;
        font-size: 12px;
    }

    .details .likes {
        font-size: 12px;
    }

    .smaller-icon {
        height: 18px;
        width: 18px;
    }
</style>