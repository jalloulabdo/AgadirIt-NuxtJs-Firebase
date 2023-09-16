<template>
  <section id="portfolio" class="portfolio panelscroll">
    <div class="container">

      <div class="section-title">
        <span>Nos Réalisations</span>
        <h2>Nos Réalisations</h2>
        <p>Découvrez nos démonstrations en action pour une vision concrète de notre expertise.</p>
      </div>

      <div class="row">
        <div class="col-lg-12">
          <ul id="portfolio-flters" c>
            <li @click="filter('filter-all')" class="filter-all filter-active" data-filter="all">All</li>
            <li @click="filter('filter-app')" class="filter-app" data-filter=".filter-app">App</li>
            <li @click="filter('filter-card')" class="filter-card" data-filter=".filter-card">Card</li>
            <li @click="filter('filter-web')" class="filter-web" data-filter=".filter-web">Web</li>
          </ul>
        </div>
      </div>

      <div class="row portfolio-container container">

        <div class="col-lg-4 col-md-6 portfolio-item mix filter-app" data-category="filter-app">
          <div class="portfolio-wrap">
            <img src="img/portfolio/portfolio-10.png" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>App 1</h4>
              <p>App</p>
              <div class="portfolio-links">
                <a href="img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox"
                  title="App 1"><i class="bi bi-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i class="bi bi-link-45deg"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item mix filter-web" data-category="filter-web">
          <div class="portfolio-wrap">
            <img src="img/portfolio/portfolio-11.jpg" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>Web 3</h4>
              <p>Web</p>
              <div class="portfolio-links">
                <a href="img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox"
                  title="Web 3"><i class="bi bi-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i class="bi bi-link-45deg"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item mix filter-app" data-category="filter-app">
          <div class="portfolio-wrap">
            <img src="img/portfolio/app-1.png" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>App 2</h4>
              <p>App</p>
              <div class="portfolio-links">
                <a href="img/portfolio/app-1.png" data-gallery="portfolioGallery" class="portfolio-lightbox"
                  title="App 2"><i class="bi bi-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i class="bi bi-link-45deg"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item mix filter-card" data-category="filter-card">
          <div class="portfolio-wrap">
            <img src="img/portfolio/card-1.jpg" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>Card 2</h4>
              <p>Card</p>
              <div class="portfolio-links">
                <a href="img/portfolio/card-1.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox"
                  title="Card 2"><i class="bi bi-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i class="bi bi-link-45deg"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item mix filter-web" data-category="filter-web">
          <div class="portfolio-wrap">
            <img src="img/portfolio/web-1.jpg" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>Web 2</h4>
              <p>Web</p>
              <div class="portfolio-links">
                <a href="img/portfolio/web-1.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox"
                  title="Web 2"><i class="bi bi-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i class="bi bi-link-45deg"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item mix filter-app" data-category="filter-app">
          <div class="portfolio-wrap">
            <img src="img/portfolio/app-2.png" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>App 3</h4>
              <p>App</p>
              <div class="portfolio-links">
                <a href="img/portfolio/app-2.png" data-gallery="portfolioGallery" class="portfolio-lightbox"
                  title="App 3"><i class="bi bi-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i class="bi bi-link-45deg"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item mix filter-card" data-category="filter-card">
          <div class="portfolio-wrap">
            <img src="img/portfolio/card-2.jpg" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>Card 1</h4>
              <p>Card</p>
              <div class="portfolio-links">
                <a href="img/portfolio/card-2.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox"
                  title="Card 1"><i class="bi bi-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i class="bi bi-link-45deg"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item mix filter-card" data-category="filter-card">
          <div class="portfolio-wrap">
            <img src="img/portfolio/card-2.png" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>Card 3</h4>
              <p>Card</p>
              <div class="portfolio-links">
                <a href="img/portfolio/card-2.png" data-gallery="portfolioGallery" class="portfolio-lightbox"
                  title="Card 3"><i class="bi bi-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i class="bi bi-link-45deg"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item mix filter-web" data-category="filter-web">
          <div class="portfolio-wrap">
            <img src="img/portfolio/web-2.jpg" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>Web 3</h4>
              <p>Web</p>
              <div class="portfolio-links">
                <a href="img/portfolio/web-2.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox"
                  title="Web 3"><i class="bi bi-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i class="bi bi-link-45deg"></i></a>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script>

export default {
  data() {
    return {
      messages: {
        'notfound': 'Can not found an article',
        'deleteerror': 'An error occurred while deleting article'
      },
      categories: [
        { class: 'filter-app' },
        { class: 'filter-app' },
        { class: 'filter-card' },
        { class: 'filter-web' },
      ],
      mixer: null
    }
  },
  async mounted() {
    const docRef = await this.$fire.firestore.collection("portfolio")
    try {
      docRef.onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc.data())
        })
      })
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch posts at this time. Please try again.'
      })
    }
    const containerEl = document.querySelector('.portfolio-container')
    var mixer = new this.mixitup(containerEl);
  },
  methods: {
    filter: function (slug) {
      const containerEl = document.querySelector('.portfolio-container')

      var mixer = new this.mixitup(containerEl);

      var elems = document.querySelectorAll(".filter-active");

      [].forEach.call(elems, function (el) {
        el.classList.remove("filter-active");
      });
      document.getElementsByClassName(slug)[0].classList.add('filter-active')
    }
  }
}
</script>


