<script lang="ts">
    import type { Snippet } from "svelte";
    import { fly } from "svelte/transition";

    let { children }: {children: Snippet} = $props();
    let hovered = $state(false);
    let mouseX = $state(0);
    let mouseY = $state(0);

    function onmouseenter() {
        hovered = true;
    }

    function onmouseleave() {
        hovered = false;
    }

    function onmousemove(event: MouseMoveEvent) {
        mouseX = event.clientX;
        mouseY = event.clientY;
    }

    $inspect(hovered);

    function teleport(node) {
        document.body.appendChild(node);

        return {
            destroy() {
                if (node.parentNode) {
                    node.parentNode.removeChild(node);
                }
            }
        }
    }
</script>

<svelte:window {onmousemove}/>
<div class="inline" {onmouseenter} {onmouseleave}>{@render children()}</div>
{#if hovered}
    <div transition:fly={{y: 50, duration: 250}} style:top={`${mouseY + 25}px`} style:left={`${mouseX + 25}px`} use:teleport class="fixed block backdrop-blur text-white p-2 rounded-lg">
        <aside>i'm actually ace lol</aside>
    </div>
{/if}
