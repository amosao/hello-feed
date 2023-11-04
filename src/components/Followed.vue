<script setup lang="ts">
import type { PostItem } from '@/interfaces/PostItem';

const posts: PostItem[] = [
    {
        title: "Chapter #1096 discussion",
        sneakpeek: "Luffy is tired after facing Kizaru and the marines are coming for the mugiwara crew with full power!",
        author: "OpexOFC",
        likes: 146,
        pictureUrl: "one-piece-banner.jpe",
        published: "Oct 29, 2023",
        tags: ["Manga", "One piece"]
    },
    {
        title: "Unity biggest mistake!",
        sneakpeek: "The consequences of Unity's terrible decisions.",
        author: "Game Engineers",
        likes: 549,
        pictureUrl: "unity-banner.jpg",
        published: "Oct 13, 2023",
        tags: ["Games", "News"]
    },
    {
        title: "Baldur's Gate 3 \"New standarts\" ",
        sneakpeek: "What are AAA game studios afraid after the release of Baldur's Gate 3.",
        author: "Game Engineers",
        likes: 983,
        pictureUrl: "bg3-banner.jpg",
        published: "Sep 15, 2023",
        tags: ["Games", "Article"]
    },
    {
        title: "Is The Withcer still worth playing?.",
        sneakpeek: "A brief discussion about the first game of The Witcher trilogy.",
        author: "Worth Classics",
        likes: 504,
        pictureUrl: "witcher-Banner.jpg",
        published: "Aug 17, 2023",
        tags: ["Article", "Games"]
    },
]

const forYou: PostItem[] = [
    {
        title: "The future of Jujutsu Kaisen",
        sneakpeek: "What are the expectations for the upcoming season?",
        author: "OtakuNation",
        likes: 283,
        pictureUrl: "jujutsu-kaisen-banner.jpg",
        published: "Sep 03, 2023",
        tags: ["Anime", "Article"]
    },
    {
        title: "What now? Episode 15: Blizzard",
        sneakpeek: "Today, a in-depth discussion about the current situation on Activision Blizzard and the future of the company and games.",
        author: "Game News",
        likes: 152,
        pictureUrl: "blizzard-banner.jpg",
        published: "Aug 17, 2023",
        tags: ["News", "Article"]
    },
    {
        title: "Lunacid, a hidden gem.",
        sneakpeek: "A great indie first-person dungeon crawler that excels in every aspect of the genre.",
        author: "Indie Nation",
        likes: 699,
        pictureUrl: "lunacid-banner.jpg",
        published: "Aug 17, 2023",
        tags: ["Article", "Games"]
    },
]

</script>

<template>
    <div class="header">
        <h1>Hello Hubly!</h1>
    </div>

    <div id="feeds-container">
        <div class="feed">
            <div class="feed-header">
                <h3>Followed</h3>
            </div>
            <ul class="feed-body">
                <PostItem v-for="postItem in posts" :post="postItem"></PostItem>
            </ul>
        </div>

        <div class="feed">
            <div class="feed-header">
                <h3>For you</h3>
            </div>
            <ul class="feed-body">
                <PostItem v-for="postItem in forYou" :post="postItem"></PostItem>
            </ul>
        </div>
    </div>

</template>

<style scoped>
    h1 {
        font-weight: 500;
        font-size: 2.6rem;
        color: white;
    }

    h3 {
        margin: 0;
        font-size: 1.2rem;
    }

    .header {
        top: 0;
        position: sticky;
        height: 4.5rem;
    }

    .feed {
        border-top: solid 2px #252525;
        top: 0;
        padding: 0 0.5rem;
    }

    .feed .feed-header {
        top: 0;
        text-align: center;
        height: 2rem;
        color: var(--color-heading);
    }

    .feed .feed-body {
        list-style-type: none;
        padding: 0 0.5rem;
        margin: 0;
        height: 89vh;
        overflow-y: auto;
    }

    @media (min-width: 1024px) {
        .feed:first-of-type {
            border-right: solid 2px #252525;;
        }
    }

/* @media () */
</style>
