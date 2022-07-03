<template>
  <div class="antialiased bg-body text-body font-body admin-port">
    <!-- Content Begins -->
    <div class="mx-auto lg:ml-80">

        <!-- Content top nav begins -->
        <div class="py-5 px-6 bg-white shadow relative flex items-center justify-end hidden lg:flex">
            <ul class="hidden lg:flex lg:justify-end mr-6">
            <li>
                <a class="text-gray-200 hover:text-gray-300" href="#">
                <svg class="h-5 w-5" viewbox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 11.18V8C13.9986 6.58312 13.4958 5.21247 12.5806 4.13077C11.6655 3.04908 10.3971 2.32615 9 2.09V1C9 0.734784 8.89464 0.48043 8.70711 0.292893C8.51957 0.105357 8.26522 0 8 0C7.73478 0 7.48043 0.105357 7.29289 0.292893C7.10536 0.48043 7 0.734784 7 1V2.09C5.60294 2.32615 4.33452 3.04908 3.41939 4.13077C2.50425 5.21247 2.00144 6.58312 2 8V11.18C1.41645 11.3863 0.910998 11.7681 0.552938 12.2729C0.194879 12.7778 0.00173951 13.3811 0 14V16C0 16.2652 0.105357 16.5196 0.292893 16.7071C0.48043 16.8946 0.734784 17 1 17H4.14C4.37028 17.8474 4.873 18.5954 5.5706 19.1287C6.26819 19.6621 7.1219 19.951 8 19.951C8.8781 19.951 9.73181 19.6621 10.4294 19.1287C11.127 18.5954 11.6297 17.8474 11.86 17H15C15.2652 17 15.5196 16.8946 15.7071 16.7071C15.8946 16.5196 16 16.2652 16 16V14C15.9983 13.3811 15.8051 12.7778 15.4471 12.2729C15.089 11.7681 14.5835 11.3863 14 11.18ZM4 8C4 6.93913 4.42143 5.92172 5.17157 5.17157C5.92172 4.42143 6.93913 4 8 4C9.06087 4 10.0783 4.42143 10.8284 5.17157C11.5786 5.92172 12 6.93913 12 8V11H4V8ZM8 18C7.65097 17.9979 7.30857 17.9045 7.00683 17.7291C6.70509 17.5536 6.45451 17.3023 6.28 17H9.72C9.54549 17.3023 9.29491 17.5536 8.99317 17.7291C8.69143 17.9045 8.34903 17.9979 8 18ZM14 15H2V14C2 13.7348 2.10536 13.4804 2.29289 13.2929C2.48043 13.1054 2.73478 13 3 13H13C13.2652 13 13.5196 13.1054 13.7071 13.2929C13.8946 13.4804 14 13.7348 14 14V15Z" fill="currentColor"></path>
                </svg>
                </a>
            </li>
            </ul>
            <div class="hidden lg:block">
            <button class="flex items-center">
                <img class="w-8 h-8 mr-2 rounded-full object-cover object-right" src="@/assets/images/user-avatar.png" alt="">
                <p class="text-sm mr-3">Thomas Brown</p>
            </button>
            </div>
        </div>
        <!-- Content top nav ends -->                

        <!-- Timelines begins -->
        <section class="py-8">
            <div class="container" id="visualization"> </div>
        </section>
        <!-- Timelines ends -->  

        <!-- Analytics begins -->
        <section class="py-8">
            <div class="container px-4 mx-auto">

            </div>
        </section>
        <!-- Analytics ends -->  

        <section class="py-8">
            <div class="container px-4 mx-auto">
                <div class="p-6 bg-white rounded shadow">
                <div class="flex justify-between items-center mb-6">
                    <span class="inline-block py-1 px-2 bg-blue-50 text-xs text-blue-500 rounded-full">Development</span>
                    <button class="focus:outline-none">
                    <svg class="h-3 w-3 text-gray-200" viewBox="0 0 12 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 0.666664C5.26667 0.666664 4.66667 1.26666 4.66667 2C4.66667 2.73333 5.26667 3.33333 6 3.33333C6.73333 3.33333 7.33333 2.73333 7.33333 2C7.33333 1.26666 6.73333 0.666664 6 0.666664ZM1.33333 0.666664C0.6 0.666664 0 1.26666 0 2C0 2.73333 0.6 3.33333 1.33333 3.33333C2.06667 3.33333 2.66667 2.73333 2.66667 2C2.66667 1.26666 2.06667 0.666664 1.33333 0.666664ZM10.6667 0.666664C9.93333 0.666664 9.33333 1.26666 9.33333 2C9.33333 2.73333 9.93333 3.33333 10.6667 3.33333C11.4 3.33333 12 2.73333 12 2C12 1.26666 11.4 0.666664 10.6667 0.666664Z" fill="currentColor"></path>
                    </svg>
                    </button>
                </div>
                <div class="mb-4">
                    <h3 class="mb-2 font-medium">Project example name</h3>
                    <p class="text-sm text-gray-500">Starting work and assigning tasks. Adding new features and test them to complete the project.</p>
                </div>
                <div class="flex justify-between">
                    <div class="flex items-center">
                    <img class="w-8 h-8 rounded-full object-cover object-right" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80" alt="">
                    <div class="inline-flex -ml-2 items-center justify-center w-8 h-8 rounded-full bg-indigo-50 text-xs font-medium text-indigo-500">+3</div>
                    </div>
                    <div class="flex">
                    <a class="flex mr-4 items-center text-xs text-gray-500" href="#">
                        <span class="mr-2">
                        <svg class="h-4 w-4 text-gray-200" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.83317 8.16666H4.83317C4.61216 8.16666 4.4002 8.25446 4.24392 8.41074C4.08764 8.56702 3.99984 8.77898 3.99984 8.99999C3.99984 9.22101 4.08764 9.43297 4.24392 9.58925C4.4002 9.74553 4.61216 9.83333 4.83317 9.83333H9.83317C10.0542 9.83333 10.2661 9.74553 10.4224 9.58925C10.5787 9.43297 10.6665 9.22101 10.6665 8.99999C10.6665 8.77898 10.5787 8.56702 10.4224 8.41074C10.2661 8.25446 10.0542 8.16666 9.83317 8.16666ZM13.1665 4.83333H4.83317C4.61216 4.83333 4.4002 4.92112 4.24392 5.0774C4.08764 5.23369 3.99984 5.44565 3.99984 5.66666C3.99984 5.88767 4.08764 6.09964 4.24392 6.25592C4.4002 6.4122 4.61216 6.49999 4.83317 6.49999H13.1665C13.3875 6.49999 13.5995 6.4122 13.7558 6.25592C13.912 6.09964 13.9998 5.88767 13.9998 5.66666C13.9998 5.44565 13.912 5.23369 13.7558 5.0774C13.5995 4.92112 13.3875 4.83333 13.1665 4.83333ZM14.8332 0.66666H3.1665C2.50346 0.66666 1.86758 0.930052 1.39874 1.39889C0.929896 1.86773 0.666504 2.50362 0.666504 3.16666V11.5C0.666504 12.163 0.929896 12.7989 1.39874 13.2678C1.86758 13.7366 2.50346 14 3.1665 14H12.8248L15.9082 17.0917C15.986 17.1689 16.0784 17.23 16.1799 17.2715C16.2814 17.3129 16.3902 17.334 16.4998 17.3333C16.6092 17.3361 16.7176 17.3133 16.8165 17.2667C16.9687 17.2041 17.099 17.098 17.1909 16.9615C17.2828 16.8251 17.3323 16.6645 17.3332 16.5V3.16666C17.3332 2.50362 17.0698 1.86773 16.6009 1.39889C16.1321 0.930052 15.4962 0.66666 14.8332 0.66666ZM15.6665 14.4917L13.7582 12.575C13.6803 12.4978 13.588 12.4367 13.4864 12.3952C13.3849 12.3537 13.2762 12.3327 13.1665 12.3333H3.1665C2.94549 12.3333 2.73353 12.2455 2.57725 12.0892C2.42097 11.933 2.33317 11.721 2.33317 11.5V3.16666C2.33317 2.94565 2.42097 2.73369 2.57725 2.5774C2.73353 2.42112 2.94549 2.33333 3.1665 2.33333H14.8332C15.0542 2.33333 15.2661 2.42112 15.4224 2.5774C15.5787 2.73369 15.6665 2.94565 15.6665 3.16666V14.4917Z" fill="currentColor"></path>
                        </svg>
                        </span>
                        <span>6</span>
                    </a>
                    <a class="flex items-center text-xs text-gray-500" href="#">
                        <span class="mr-2">
                        <svg class="h-4 w-4 text-gray-200" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.0837 9.33334L7.91699 14.5C6.50032 15.9167 4.25033 15.9167 2.91699 14.5C1.50033 13.0833 1.50033 10.8333 2.91699 9.50001L9.58366 2.83334C10.417 2.08334 11.667 2.08334 12.5003 2.83334C13.3337 3.66668 13.3337 5.00001 12.5003 5.75001L6.75033 11.5C6.50033 11.75 6.08366 11.75 5.83366 11.5C5.58366 11.25 5.58366 10.8333 5.83366 10.5833L10.0837 6.33334C10.417 6.00001 10.417 5.50001 10.0837 5.16668C9.75032 4.83334 9.25032 4.83334 8.91699 5.16668L4.66699 9.50001C3.75033 10.4167 3.75033 11.8333 4.66699 12.75C5.58366 13.5833 7.00032 13.5833 7.91699 12.75L13.667 7.00001C15.167 5.50001 15.167 3.16668 13.667 1.66668C12.167 0.166676 9.83366 0.166676 8.33366 1.66668L1.66699 8.33334C0.666992 9.33334 0.166992 10.6667 0.166992 12C0.166992 14.9167 2.50032 17.1667 5.41699 17.1667C6.83366 17.1667 8.08366 16.5833 9.08366 15.6667L14.2503 10.5C14.5837 10.1667 14.5837 9.66668 14.2503 9.33334C13.917 9.00001 13.417 9.00001 13.0837 9.33334Z" fill="currentColor"></path>
                        </svg>
                        </span>
                        <span>2</span>
                    </a>
                    </div>
                </div>
                </div>
            </div>
        </section>


    </div>
    <!-- Content Starts -->
  </div>
</template>


<script>
import { DataSet, Timeline } from "vis-timeline/standalone";
import "vis-timeline/styles/vis-timeline-graph2d.css";

export default {
    mounted(){
        // DOM element where the Timeline will be attached
        const container = this.$el.querySelector('#visualization');

        const items = new DataSet([
        { id: 1, content: "item 1", start: "2014-04-20" },
        { id: 2, content: "item 2", start: "2014-04-14" },
        { id: 3, content: "item 3", start: "2014-04-18" },
        { id: 5, content: "item 5", start: "2014-04-25" },
        { id: 6, content: "item 6", start: "2014-04-27" },
        { id: 11, content: "item 1", start: "2014-05-20" },
        { id: 21, content: "item 2", start: "2014-05-14" },
        { id: 31, content: "item 3", start: "2014-05-18" },
        { id: 51, content: "item 5", start: "2014-05-25" },
        { id: 61, content: "item 6", start: "2014-05-27" }
        ]);

        // Configuration for the Timeline
        const options = {
        stack: false,
        // clickToUse: true,
        // editable: {
        //     add: true
        // },
        margin: 150,
        width: '100%',
        height: '100%',
        template: function (item, element, data) {
            // return `<h1 @click="console.log('test')">` + data.start + `</h1>`;
            let html = `<div class="bg-white rounded shadow p-6 test" style="height:200px; width:300px;">                            
                                            <div class="flex justify-between items-center mb-2">
                    <span class="inline-block py-1 px-2 bg-blue-50 text-xs text-blue-500 rounded-full">Development</span>
                    <button class="focus:outline-none">
                    <svg class="h-3 w-3 text-gray-200" viewBox="0 0 12 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 0.666664C5.26667 0.666664 4.66667 1.26666 4.66667 2C4.66667 2.73333 5.26667 3.33333 6 3.33333C6.73333 3.33333 7.33333 2.73333 7.33333 2C7.33333 1.26666 6.73333 0.666664 6 0.666664ZM1.33333 0.666664C0.6 0.666664 0 1.26666 0 2C0 2.73333 0.6 3.33333 1.33333 3.33333C2.06667 3.33333 2.66667 2.73333 2.66667 2C2.66667 1.26666 2.06667 0.666664 1.33333 0.666664ZM10.6667 0.666664C9.93333 0.666664 9.33333 1.26666 9.33333 2C9.33333 2.73333 9.93333 3.33333 10.6667 3.33333C11.4 3.33333 12 2.73333 12 2C12 1.26666 11.4 0.666664 10.6667 0.666664Z" fill="currentColor"></path>
                    </svg>
                    </button>
                </div>
                <div class="mb-4">
                    <p class="text-sm text-gray-500 whitespace-pre-line text-left">Starting work and assigning tasks. Adding new features and test them to complete the project.</p>
                </div>
                            <div class="flex justify-between">
                                <div class="flex items-center">
                                <img class="w-8 h-8 rounded-full object-cover object-right" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80" alt="">
                                <div class="inline-flex -ml-2 items-center justify-center w-8 h-8 rounded-full bg-indigo-50 text-xs font-medium text-indigo-500">+3</div>
                                </div>
                                <div class="flex">
                                <a class="flex mr-4 items-center text-xs text-gray-500" href="#">
                                    <span class="mr-2">
                                    <svg class="h-4 w-4 text-gray-200" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.83317 8.16666H4.83317C4.61216 8.16666 4.4002 8.25446 4.24392 8.41074C4.08764 8.56702 3.99984 8.77898 3.99984 8.99999C3.99984 9.22101 4.08764 9.43297 4.24392 9.58925C4.4002 9.74553 4.61216 9.83333 4.83317 9.83333H9.83317C10.0542 9.83333 10.2661 9.74553 10.4224 9.58925C10.5787 9.43297 10.6665 9.22101 10.6665 8.99999C10.6665 8.77898 10.5787 8.56702 10.4224 8.41074C10.2661 8.25446 10.0542 8.16666 9.83317 8.16666ZM13.1665 4.83333H4.83317C4.61216 4.83333 4.4002 4.92112 4.24392 5.0774C4.08764 5.23369 3.99984 5.44565 3.99984 5.66666C3.99984 5.88767 4.08764 6.09964 4.24392 6.25592C4.4002 6.4122 4.61216 6.49999 4.83317 6.49999H13.1665C13.3875 6.49999 13.5995 6.4122 13.7558 6.25592C13.912 6.09964 13.9998 5.88767 13.9998 5.66666C13.9998 5.44565 13.912 5.23369 13.7558 5.0774C13.5995 4.92112 13.3875 4.83333 13.1665 4.83333ZM14.8332 0.66666H3.1665C2.50346 0.66666 1.86758 0.930052 1.39874 1.39889C0.929896 1.86773 0.666504 2.50362 0.666504 3.16666V11.5C0.666504 12.163 0.929896 12.7989 1.39874 13.2678C1.86758 13.7366 2.50346 14 3.1665 14H12.8248L15.9082 17.0917C15.986 17.1689 16.0784 17.23 16.1799 17.2715C16.2814 17.3129 16.3902 17.334 16.4998 17.3333C16.6092 17.3361 16.7176 17.3133 16.8165 17.2667C16.9687 17.2041 17.099 17.098 17.1909 16.9615C17.2828 16.8251 17.3323 16.6645 17.3332 16.5V3.16666C17.3332 2.50362 17.0698 1.86773 16.6009 1.39889C16.1321 0.930052 15.4962 0.66666 14.8332 0.66666ZM15.6665 14.4917L13.7582 12.575C13.6803 12.4978 13.588 12.4367 13.4864 12.3952C13.3849 12.3537 13.2762 12.3327 13.1665 12.3333H3.1665C2.94549 12.3333 2.73353 12.2455 2.57725 12.0892C2.42097 11.933 2.33317 11.721 2.33317 11.5V3.16666C2.33317 2.94565 2.42097 2.73369 2.57725 2.5774C2.73353 2.42112 2.94549 2.33333 3.1665 2.33333H14.8332C15.0542 2.33333 15.2661 2.42112 15.4224 2.5774C15.5787 2.73369 15.6665 2.94565 15.6665 3.16666V14.4917Z" fill="currentColor"></path>
                                    </svg>
                                    </span>
                                    <span>6</span>
                                </a>
                                <a class="flex items-center text-xs text-gray-500" href="#">
                                    <span class="mr-2">
                                    <svg class="h-4 w-4 text-gray-200" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.0837 9.33334L7.91699 14.5C6.50032 15.9167 4.25033 15.9167 2.91699 14.5C1.50033 13.0833 1.50033 10.8333 2.91699 9.50001L9.58366 2.83334C10.417 2.08334 11.667 2.08334 12.5003 2.83334C13.3337 3.66668 13.3337 5.00001 12.5003 5.75001L6.75033 11.5C6.50033 11.75 6.08366 11.75 5.83366 11.5C5.58366 11.25 5.58366 10.8333 5.83366 10.5833L10.0837 6.33334C10.417 6.00001 10.417 5.50001 10.0837 5.16668C9.75032 4.83334 9.25032 4.83334 8.91699 5.16668L4.66699 9.50001C3.75033 10.4167 3.75033 11.8333 4.66699 12.75C5.58366 13.5833 7.00032 13.5833 7.91699 12.75L13.667 7.00001C15.167 5.50001 15.167 3.16668 13.667 1.66668C12.167 0.166676 9.83366 0.166676 8.33366 1.66668L1.66699 8.33334C0.666992 9.33334 0.166992 10.6667 0.166992 12C0.166992 14.9167 2.50032 17.1667 5.41699 17.1667C6.83366 17.1667 8.08366 16.5833 9.08366 15.6667L14.2503 10.5C14.5837 10.1667 14.5837 9.66668 14.2503 9.33334C13.917 9.00001 13.417 9.00001 13.0837 9.33334Z" fill="currentColor"></path>
                                    </svg>
                                    </span>
                                    <span>2</span>
                                </a>
                                </div>
                            </div>
                        </div>`
            return html
        },
        };

        // Create a Timeline
        const timeline = new Timeline(container, items, options);
    }
}
</script>

<style>
#visualization {
  margin: auto;
  width: 100%;
  height: 80vh;
  border: 1px solid lightgray;
}
/* alternating column backgrounds */
.vis-time-axis .vis-grid.vis-odd {
    border-color: white;
    background-color: white;
}
.vis-time-axis .vis-grid.vis-even {
    border-color: white;
    background-color: white;
}

</style>