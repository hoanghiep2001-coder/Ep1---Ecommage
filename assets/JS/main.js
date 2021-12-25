const app = {
    Galleries: [
        {
            path: 'gallery1',
        },
        {
            path: 'gallery2',
        },
        {
            path: 'gallery3',
        },
        {
            path: 'gallery4',
        },
    ],
    render: function() {
        const htmls = this.Galleries.map(Gallery => {
            return `
            <div class="body__container-gallery-row-col col l-3">
                <img src="./assets/Img/gallery/${Gallery.path}.png" alt="">
                <h6>Ad eos saepe lucilius</h6>
                <p>At eripuit signiferumque sea, vel ad mucius molestie, cu labitur.</p>
            </div>
            `;
        })

        document.querySelector('.body__container-gallery-row').innerHTML = htmls.join("")
    },
    handleEvent: function () {

    },
    start: function() {
        this.render()
        this.handleEvent()
    }
}

app.start()