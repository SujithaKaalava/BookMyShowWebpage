

pages:  (may have multiple components)

    >> Home.page.jsx  (default.Hoc.jsx)
    >> Movie.page.jsx
    >> Play.page.jsx (default.Hoc.jsx)


HoC/layouts:
    >> default.Hoc.jsx  (for both home as well as play page)  navigation bar
    >> movie.hoc.jsx


Components:
    >> cast                     cast.components.jsx   (all the movies)
    >> Entertainment            entertainmentCard.component.jsx
    >> HeroCarousel             HeroCarousel.components.jsx  (banner)
                                arrows.components.jsx
    >> MovieHero                MovieHero.component.jsx
                                MovieInfo.component.jsx

    >> Navbar                   Navbar.component.jsx
                                MovieNavbar.component.jsx

    >> PaymentModel             Payment.component.jsx
    >>PlayFilters               Filters.component.jsx

    >> Poster                   Poster.component.jsx
    >>PosterSlider              PosterSlider.Component.jsx



>> axios  ---> for API thar deals with http...... it is a http client (for connecting frontend and backend) node.js  

>> HeadlessUl  -> style for which are not present in tailwind   >> npm install @headlessui/react

>> react Icons --> just like google fontawsome icons   >> npm install react-icons --save 

>> react-slike --> for banner seection
## npx create-react-app book-my-show-app

>> tailwind is present on th etop of the bootstrap