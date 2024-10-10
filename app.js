let app = Vue.createApp({
    data() {
        return {
            perspective: 100,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0
        }
    },
    methods: {
        reset() {
            this.perspective = 100;
            this.rotateX = 0;
            this.rotateY = 0;
            this.rotateZ = 0;
        },
        async copy() {
            // Implement copy functionality here
            let text = `transform:${this.box.transform}`;
            await navigator.clipboard.writeText(text);

            alert(`Copied CSS to clipboard: ${text}`);
        }
    },
    computed: {
        box() {
            return {
                transform:
                    `perspective(${this.perspective}px)
                     rotateX(${this.rotateX}deg)
                     rotateY(${this.rotateY}deg)
                     rotateZ(${this.rotateZ}deg)`
            };
        }
    }
});

app.mount('#app');