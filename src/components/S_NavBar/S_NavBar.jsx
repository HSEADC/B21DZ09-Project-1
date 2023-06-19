import React from 'react'

export default class S_NavBar extends React.Component {
  render() {
    return (
      <>
        <section S_NavBar>
          <div class="O_NavBar">
            <div class="W_NavBar">
              <a class="A_Logo black" href="/"></a>
              <div class="W_NavBarCategories">
                <div class="C_NavBarCategories">
                  <a class="A_NavBarCategory" href="/styles.html">
                    СТИЛИ
                  </a>
                  <a class="A_NavBarCategory" href="/influencers.html">
                    ИНФЛЮЕНСЕРЫ
                  </a>
                  <a class="A_NavBarCategory" href="/antitrends.html">
                    АНТИТРЕНДЫ
                  </a>
                </div>
              </div>

              <div class="Q_NavBarBurger black"></div>
              <div class="M_Menu black">
                <div class="Q_Close black"></div>
                <div class="C_NavBarCategories">
                  <a class="A_NavBarCategory" href="/">
                    ГЛАВНАЯ
                  </a>
                  <a class="A_NavBarCategory" href="/styles.html">
                    СТИЛИ
                  </a>
                  <a class="A_NavBarCategory" href="/influencers.html">
                    ИНФЛЮЕНСЕРЫ
                  </a>
                  <a class="A_NavBarCategory" href="/antitrends.html">
                    АНТИТРЕНДЫ
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}
