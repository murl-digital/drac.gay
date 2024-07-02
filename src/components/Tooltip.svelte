<script lang="ts">
    let { children } = $props();
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
    <div use:teleport class="block fixed bg-black text-white" style:top={`${mouseY}px`} style:left={`${mouseX}px`}>
        <aside>i'm actually ace lol</aside>
    </div>
{/if}

