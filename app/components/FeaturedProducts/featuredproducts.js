import React from 'react'

export default function Featuredproducts() {
  return (
    <div>

<section className="section featured" id="featured">
        <div className="featured__container container">
          <div className="title">
            <h1 className="primary__title">OUR SENIOR DOCTORS</h1>
          </div>
          <div className="featured__center">
            <div className="product">
              <div className="img__container" style={{height:"250px"}}>
                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgWFRUYGRgaHBoYGhgYGhgYGBgYGBocGRgYGBgcIS4lHB4rHxgYJjgnKy8xNTY1GiQ7QDszPy40NTEBDAwMEA8QHhISHzQrJCs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0MTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAMIBBAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAAEDBAYCB//EAEEQAAIBAgMECAIHCAIBBQEAAAECAAMRBBIhBTFBUQYiMmFxgZGhUrETQmJyweHwBxQVI5KistEzgkM0Y5PC8ST/xAAZAQADAQEBAAAAAAAAAAAAAAAAAgMBBAX/xAAlEQEBAAICAgICAQUAAAAAAAAAAQIRITEDQRJRcYFhBBMiMmL/2gAMAwEAAhEDEQA/APYooojNYUQiiEAUUUeYCMYRGIQB4ozG05Q8YB3GMectAI50JyI7MALk2EYGaRtAm0ekSqSqC558IDrbcLdpye4XtEyzmPbccLl03CsOYkqzzlccL3sYWwu2Lbiw87+xiTy426Uvhyk215bl+M7CwNgttIe1bxG8eIhhHDC6kEHiJTe09aMJ2Zws7aaxG+6LD7omnaLaDPbqQYg7pPK2JO6EGXTLbbfUyhgX5jST7ZfrGR7PfgRKxy3tfLqBpK9Sp3Sw4UbpWdu6FYru3dIG7Qk7N3SBR1hErYK0xpFOqam0aTVbCIxRGMsUUUUAUeNHEwGMa8TtOEW++AOovvkkUUGlOWnU4c6TWK1euqKWY2AmM270jz9VDZZ10x2qR1AfLumEqYkndEyy03HH5URrYzXfFh6mYwOj3hDDMJx53deh4sZIM0qf60kyrI8I24c4RXDMTYC8nqq8e1YEiEdl7Wamd/VO9TuP5ytWwxUaiVGj455Y1PPDHKPR8NWDqGU6EXkzzJ9Gto5WyMeq27ub85rGnbhl8pt5+eNxunDidIYxio7o5PaQyji2+Rl1oMxjanwhBl0yG1anWPjJ9nsCNdJFj16x8ZbwaKw5Skrl9pqoUcZVdxLr0VHGQOqwrVJnEipNd5PUZZBh3GeLehOxlN26KNTbSKR2tprYjFGMooQjxhHgCiLWjM1pyovxmAwFzr5yQRGITQeKKKYClbHvlRj3SzBPSFv/AOdyLmw+rr47t81l6eZ7WrF2dyedvDhM+++E9qgqCuvA+YI6tvAmDEXid1tOWnPlIZ9K+LimVoRwTdaVMM6E9YH5wzgVpk7zyvac+UruxsE9mICwB3c+R4aes0uGqnXqjTQa+8z2Ew+VyL8BY8CL2HzhambH/Rj43TM58k+NYZNbXgSqtvnCeJpErm18LekHvfjw4Rc7utwmohV8uo4G/nPQsBXz00buF/GedP3cfxm56PX+iUW4Svg9xy/1Hcomzgb5IolPFMQVtzltTOlzS80mg1gGc3hFzpBIqhWYnnNjMlTaOzQesvp+cqUcMPCX8XjwdAbyqqZtQZsc25vgz4cDeZC9NZYfCc2kLYMc4zVCsiyLBquaWcRge+c4PDAGLl0yTkSR1tHjpTW0aR5XaiMY8YyihCPGEeAc5dd/65TqKKAIxCIxCAPGjxpgAOnOM+iwNdgbEqEFtDeoy09P6jPHNk4t0qLkdkVj10QkK43DMgOU8NSJ7P0w2UcTg61Fe0VDJ3uhDqPMrbzniOyk/mUye7Qgi2oGvvFy7PNWVozWQgisbIxsrjVqZBuGtezJrqvfcEa3BY9GRyr5cvaV0N0dd5dXG9d/fpYgEWF3bFSxCjQXJPfc7gPL5yiEJVwCShAuvKxBNrDxOn5yeVkrcMbZwWC2iimwAP3sgv8A1HSaCg1J7ql0q2vlPZbw108RcTNYTZ6PYHdfSzZWHnYg+ghitsdVs6VAgUdm2bh7X4jdE1i6JcprYts7FnISuh4jiLaGX8diiq3DWBAF+ROlve/lBXR/q12Da52zXv1RmGY3IJtYkwdtyq4qFhcoNwXrAtre2p0Ft/5yertb5TTWYbFuyWuTbdc/O5kJxrXyutid3+r/ACmLwm1ayuOrU11GUC3mYXTa5qtkqiz8GtYkjg3Pu1Pjwj3HhP5TfAwNWUDn6zf7HSyDwEw2zUzOg3agk6b9SN/dNns3aKM5oqHuq3zECxANjuOmvOU8M1EPNflfwfa+JyZeZOkI4apmUEwPtpxmUG0IbPrqUGs6PTimX+dWqx0gNlzX8TCONxiqDqJnauNsLg8zDXDfJeHOLoZWveTUaZPZMGNjs7WMvYdX+qY2PSEWHwrn60ZMK3FonWrznNJagPWIhTJMRhDzlKnhSDvMv16jW3iUkRyTrFyNO1pKBtvMUdKT23xSP6WamKKMZUxCPGEeAKKKKAIxCMY4gCiiimAp4l0l2c1HabKq2Q1PpFI4rUXO2nABw48u6e2zB/tBwBDriVBNkamx0stixQnjvdplg3pgsac9RjwGnpLOzKKMdSym+9TY/wCj4GCRW/XlLuzSb6AnuEh5OenV/T2Y720WKwOXrBKTj4msjep3e8HY/FNUVURFVLi5U5t3G/LdulLamMcowGjbvuA7/PWCKG1KtLcl1+tvPnJ/G+lrljO7w9H2NggdQtza5nD7Ooh2VwMr666Wcb7HhcW9DBWwukihe0BcWI3HXhbeDL7Y+nib01V8+8NlZQpH1gxGlvy1vFksPbMvaD+EVKBJSmKqHc6NlYcg4BF/1ulZQcxX6PLuYgjQ8r63tewkuArlHNN2ZGH1kNgy8GC7h+UM410UHJ1iQAWOpaw3kn5d8a/Zfj6VNjqDWGUBVUMQBcheYuTfjx8JquiuCZEeq/aqG4vvyLfL63J8xAnRbCB3cG9j2hwy8QT3k2m4nR45xK4/JdWyAm08NncdwgzHB6IJVtPlLW2scUe4G4c7QHj9pGohuLSmWu3n52fK/bLVdr1Xr5S5K33Q+ahsLnhMZhf+c+JnouxKSOLNa/IxpybLqQOw6ZjDGHzr2dY2N2QEbMhsOXKdYes6fVvGhJNdpWqVvhkFStW+Ey0+1mH1D6SFtsH4D6TKZRq1qnwGT4KtUtqhnb7ZUb0PoZYwm1UOuX2mZWa7NjOUgrP8JilwbQTlFI8fa36HooopUxhHjCPAFFFFAGMcRjHEAUUUUAUznTmnmwrjvX52HuRNHM30j2jTanUoqwdzZMq/Vc6qCdwIsDbw3XgyvFm0bxuPMQ5h3VBTbdfMToN4t+F4I2goDXG6+bw5y/Tf+WFPM++k57xdunDVxsI7Yos5Lkak5Rbfe9yTbdrb8Jbw1WkQSGsTl3g77b/e14Fq4VC5VgLX0hjA7GVrZXItwJFvW1/AX4zLl9Nxwo5QwCBlYANoMzaHfc3vz1HrL+HsBpobDfw3287WuYLobCqqBbrKD3qLC91z5m8b5eFu+R1sPiFa61AF4qeuW8DpaH5Pz3C23TNlqrfMlg3E5WNiDzsSPX0tU6l0GmkrIwNP6Nh1yBm5WuWJGp4iwEnUjcNwEnlJvg2GWWrtr+hVGyVHt2mC+Si/zb2mjMo7BoZMPTFrErmPi3W19ZcY6GdeE1JHHnd5WsH0jrE1WA4QQ1UBDeE9pODVcnnaZ/atSym0a6t08+850CwGtUnvPzmnzEag2mY2Mt3M0tS9oYq58QTw2OqOMpa/jvhjDYsqNVvM3gswNxD+Ex4XtL7ShJVhtsIN6H0Mb+LUjvHtOztSgd4Ec4jDt8MXZkDbRocbS3hcRRYaWlZqOHPL2lvDYCkRpaLls+Pa1/K7oov4cnOKT5+oqORRRShiEUQigCiinDtygHcQnA0nLVrcCYBLKmI2lRQ2eqinkWF/SVMU7sDrlHITGY7Z2ZyTeZluTgTkS6bdMEpYcjDveo5Khh9QAXZgeeoH/aZfYpyfQId/WqOd93cEkk8T2R5CZ/pOB9OlMagAHzY6+wHpCmGcrVW+nVNvDQSWWV4NJ2Hbbw+Sq6EaElk8G4fh5Snha11yneND5f7Gv/5NJtbC/TJ1e2mq/aHFf9fnMoSc2YDrDQjdmHEHkRCzZsctC1XDXsefsQP17y7h8M9ro2v6Mp4TFdUgnSwsf1uOpHlDGy8YLWcg7t++RssdWNli3hqtUAZhcSyXJGoll2QbtR3bvHSUauJAXT1/1Dk24H1GszN32/ICGejezjXcZuwtmfvHBfE/IGBh1m0BJO4cSToAOZM2GN2RUw9CnWw5tWp3aoN61Ee2amw4qtlseFiRqTKYYbu6h5PJqajYHdIazWUylsPayYqiKi6Hsup7SOO0p/A8QRLWK7DeE6I5b0852oeuxHFjAu1aByXmhq0Ab35mZ/b9UhLc9Lza5J2E9Hlu/mBPQDsHMmYPY+08/wCjwNyRNam2KqjLmuO8QxPn26o0nptYi8O4TH0wLOAPGA6eJYm5F4RoYmkR1wPOOSCn0mGf4ZG+Aw7brSp+7Yd9xHrOH2Sh7LkeBimSnYVI7m95eobHt2XPrAy7Je/Vqn1hbDYesg7d4mX4UxXRs5/jMU4+mrRpLj6qjRxRjHljEIpwzgC5lCtiC2g3QC3UxA3DUxlBlOo+RGf4dT4cfaEFNwCOM0GyzhdZ3UOnjHtYQDiomloE2hhdDaHiRe0r4incGEDxfaVC+PpKfrZR7sB+E021dmZXQgfU/H8oD6WD6LFUnP8A43BPgjK/yBnp+0sEHW44bu8RZjLLBvVefmgw1XfBm19mF7ui2fjb63f4zZphdd0upswEbovwbt46mIZGKt1W79x4dYH5y5TxTE9ZDf7LWB7rEX+c9J230Ww9VP5l0bg6glh36A6eOkydXoFjFRmpvTqKL5QlRgzgbuqRlBPK8zLGnxyQJtE5bEZePWbd4KBcyRK2cgLdjuFlIGvIGFOjf7PqrWbE/wAtfhDBnJ8RcD5+E9G2bsehhwBSpqpGma12Pix1mY4NyzAeivR4oRWrLZvqId6/ab7XIcPHdrDHMEbX6R4bDELVqANa+RQWa3AkKDlHjaUk0nazuw2GH2nVopolZM4Xk6aj+3OPSbPE0yVIHKeU4XajVNp08QL5PpVQaEDJUvTN7/fJP5T1wzSzmPPMchW41BF+7ymS6Q1Oraeu7T2OlcXN1b4l/wDsOM896WdFMSqFkT6RRxTVrfc3+l5t0h/bsy2zfR9dIabfBOw1Kg3FraEHeDyMKmoLwhfJ2v4OoB2hpDlChRca2gPBVF3NDSbPpONGse6OyHfYVNuy1vOVKuwnHYc+pln+DsOxUPrOGo4hBo14n6aq08DiUPbJ/W6E6OJrrvF4Pp7RxKt1kuIXw+1viQiTz192KYJRtF/gjSYbQp8vaKS3/wBKfpopG72F5JBGOxV6qINygse8kaexPrOgxsPii4udQx9D8Ppr6ywtO2vMylsqjo6Hg2h4i+oI790vYKqWWzCzKbMO8cR3HfNgRbQX+RVH2Kn+Jk+yHJoUid5RL/0iVtsvlw9U/YYeot+Ms7LW1GmOSIP7RMvYWbXM5rmw9PnOwJDiT2RzI9poSugYWP5g90ru5UEtqo4jePEcZZMhxPYbvBHmdBAPMf2mYUZlcWKMFe411ByN7MDPQNgYj6XDUHO9qaZvvBQG/uBgD9oeCH7ooA1UkeZQ291HtJ/2cYnPgkHwO6/1WqD/ADmTsCeJwtmlevjQhyJlZxbMMwuinc1jvJ77QrtElVzAXNxv7za8B9MtnZ6IrJ1alPrBl0OU6MLj18puW/jwMdbE9n1iyDTmSWvcEkkjvte3lOXVxfXJ9pFU/wBzaeoW3fM70Y2o5QZyGtfNpbcSLkpcjQcVA75qMFtBGt9W+69rHuDglSe4G8jMr0rcdc6cYLOl71He5uQ5U203KQoy6a66cwt7wqjgi43SrWoAC66W4cOenzt8jqKey8YfpXpkWFsy35i2b1uD5GNOGXV5i7tLE/RUnqb8qkgd/D3mC6FbFTFNWxOJGdi4ADbszKHLHnoygcrGbHpU9sLV3dnjp3/hBf7O6dsKT8bk20uMqIhBtpvQ+sdP2A9JOijUwz09BzXQAXuFdRpa/ETTdDdstXpBahvUQWJ4nLYMG+0pIvzDI31rDQsoIIIuDoQdxHKeeYF/3baf0YuFqNuvcbnUeoKf/GvKDOnoXGdWjPwnQgYM2jsSjXuXQBvjXqv5nj53mJ2z0ZqUDnXrp8QHWX7y/iPaekxjNl0TLCZPLsFlOjQoNlqRdHI8DNJtXYKVAWVQrb9NA3cRuv3zN1NkuOw5BHDkeUfe0MsLj2jOCxCdh7+M4bH4lO0l4xOKTkwjNtp1HXpnyicMS4bb+tnpke8N0MdRffYeOkC4La9BzZhY94tDVLDUn7JEnlb6sUxWfoKR10ikf8MHOKJz9RTgfdgASdwFzMnhaubEMx46/OHdt4jJTPNtPLjAGz11v3Svsw3sre57/lJKejMw4HX7p1Pobn15yvsR9HHJj76y0wyuDwOkcKfSc2wz245R6usLUFsqjkAPQQVthM1MJ/7iL5ZgR7QwsX2DyrU1cdw+cskyth9SW5n2mhZkVUXZV5dY+W73+UmEp4euC7j63D7o5e8Ao9LqObDP9kq/owv7EzLfssrWSrTPAqfO7ofZFm022t8PVH2G+U8+6APkxFVObVT6NRZf83me2V6Rjluh8vnKu06ebDVF5o3yl91zKRzHvwnKLdbd0301590ew2ZL3sQzAXFxuU3G5l3nssIawlJwxJF+BYEtcfaIGf8AqDiC8CxpfSXsEV2BZjlAy3Gmhvw07xC/RqpUrItRupm1sB2RfRQTe7Wtc7hu33y8+udLzrY3gmJuN4Frd1+Hh+hoQB1i8ICy1F0df7huynxvbzlilSC3txJP69z5mOxuQPM+A/O3pLScJW7u3GNUFDmAI0Ouu7X8I2z6YFNbADS+mmp1J8bmLHaoRzDf4NJMIeon3V+U0qWefbPT942sz3uKWZrcrKAvvV/sM9BgvZuxKVB3emti++xNrXzHTiSSdfDlAUSadCctOhBpRjEZxmJNoA4bWZvpRgqgZalJrX6rrwJG5vS48hNMq2lHbdNmovk7YGZRzKm9vMAjzhC5TcYhdpV00dLjmJM21qbDrrbxEgG2WGjoR7zpsTQffYe0LfquZYw1HDVDdbX7oQp7JA1RoIw+xqbG6NaEKWEqp2XJHrJZ/wAza2HXa5+7VBpmMUh/fKw0tFI7x/lTlN0hxAZsvAaf7/XdI9mrY5G5XB5iDca5ZifP/cL4Zcyq671nVjzWRJgGyYhkO6oLjxEL1VzAjiIMxdEuodO2hzDy3jzl9KmdA6dobx81MZqvjDmqURzJY/8AQG3u8KiB6VYPiFA+qhPgWbd/bC5NoBDiX0sN50ndFbC0hvc39J3RqXJEAsCUv3YGqzdw3c9/+pdkS9rxgKr4psyVEPayN5gqbETzXonUC450P1iLf9qLs3uiz0PbvVQONGUgX7joRPNcGRTx+m7+S+tr61BS89KhGky9wPWsO11E5xNYIrOdyi/jyA7zukWCa2nGVdvUy4VBoGYlja/VQX3bicxW19NNb7oZXQx5ZZlFdsrDq5ixI5ubkC282O/gDobHXZ4cKiACyqo8AoEzgVKZF9FHiTqfVmJPeSTxvL4rsxF9LHRdOqRrqdxcDX4VGpuZDG87Xs3x6FsHVzZyfi0HIZVFvHQ35G44SajqS3fYeA/O8oUQVRm4kdUd+5dDzJ042tfW8IolgByFpWVPKavDiuLlRzuPVTI9ltekh+zMltHpY6Y1qJChKZQBSrF6hfLmKtey2DEgWN+c1ez9M6fC7eQbrL7GaVadgASdANSe6dCD8WxaolMbu233Vta/i1h6wgIAxjzkzk6n9es0Exv+j7zpREFtOoAoxEeKAYGtjkzFHSxBKm45G2+Va2Cov2SBNLtHBozsGAve/rr+MAY7Yi3ujWMNuazSDCbGdNUc+sK0cRWTtC8HYRK9LjmHfC1DanB0kMrJe7FcN6dfxUcUN4pP9NROukUTd+4bj6BqxKVBfduPgYawaZbMuqkSPF4UVqYYdsAedtY2w6hBam3DUAzpnFaKqMpzDcZKqZGzLuPaHfzjKlvDlJE9o4C9km+Irnk5A8ND+ML4hr9UTM9HMRZ3J+u7n3mkXfeLATaCQYNrufCdYypZSZDso3uYwFSJWB6wEsyse35TIAvpbjFSg19+hA4m2tpizkWo7uisRQpkNYZg6VgRlbgSNw+x3y909rE1kW+makPWoL+xlJdpPSxDBKK1v5N2QjN/5NGt3WPrFtA/0N6Qtiy5cKGQgdUEBlO42JOo4+U1WLcBSTbQXJPADfPKOg2Ja9V1AQK4aw3Avw8LJPUsDXWqmYcbgjip8fkYdwTisniqheoDqLE2F7FbDrdY6I1j1n+oDYdYw9svB3AYjq2AAtYMN4AU9lL6gHU725Slhdm3a7jqg2C2sGynS4P1AdQp3nrNqRY/UrBFufADmf1qTwAJksYvlfUKuQzqnLrnwXRb/wDaxH3DLAMp7PuQznex37rhdL24C97Dla+t5bWVn2leLplumvR794ArI2VqYJYBbl0Gtr8xraGqFQCoCDdaiKwPNlABJP3SnvL1TUEQQ2zGZAqMqotyoKklTYjKCGHUNzp36W0sWFWtl9YvV+M2T7i3APmcx9IRgyhjggCVF+jIAAO+nYaDK+63cbHuEsNi1Nspzfd63rbh3wjU9yTpOgs89xeNx1U/8OIGR2BWkGpIRdgpD3zPYZTwHdNxsvOKSCr28ozbu1320vztxvNZtciiig0oopzAB2PogtrvImc2jhXGqGafaNK9j3WmXx7uhJGoi1DLtUw2PqJo63lqvjFcXAtI8NtNTo62k+LoIyFkOvdI288XamECw19bR5CMXbTKdNIpHcX01NLsJ5fhOV/9Qv3TFFO5IabhHH4RRRgyWwO0PF/8jNYu6PFFx6ZVLaXYMbYnZ84oprReVh/yHwEUUIHn3T3/AJx9+n/msz23KrLWqlWKnJTFwSNOvppFFEvsCnQ1R9BU0+un+E2nRQ9Z/uj5xoo0AzW7UqYvt+VEeTP1h52F/CKKR9rYdr+D7Cd4F+/qiTxRS0Svbl50sUU2sOIzRRTAcTqKKAKMY8UAYx4ooBT2h2R4/hM/iIooJZ9h+JQW3CR4XcYopz3/AHNj0oRRRQVf/9k=" alt="" />
              </div>
              <div className="product__bottom">
                <div className="rating">
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-full" />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-full" />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-full" />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-full" />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-empty" />
                    </svg>
                  </span>
                </div>
                <h3>Senior Doctors</h3>
                          
              </div>
            </div>
            <div className="product">
              <div className="img__container" style={{height:"250px"}}>
                <img src="data:image/jpeg;base64,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" alt="" />
              </div>
              <div className="product__bottom">
                <div className="rating">
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-full" />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-full" />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-full" />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-full" />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-empty" />
                    </svg>
                  </span>
                </div>
                <h3>Senior Doctors</h3>
                              
              </div>
            </div>
            <div className="product">
              <div className="img__container" style={{height:"250px"}}>  
                <img src="data:image/jpeg;base64,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" alt="" />
              </div>
              <div className="product__bottom">
                <div className="rating">
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-full" />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-full" />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-full" />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-full" />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-empty" />
                    </svg>
                  </span>
                </div>
                <h3>Senior Doctors</h3>
                              
              </div>
            </div>
            <div className="product">
              <div className="img__container" style={{height:"200px"}}>
                <img src="data:image/jpeg;base64,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" alt="" />
              </div>
              <div className="product__bottom">
                <div className="rating">
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-full" />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-full" />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-full" />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-full" />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-empty" />
                    </svg>
                  </span>
                </div>
                <h3>Senior Doctors</h3>
                              
              </div>
            </div>
            <div className="product">
              <div className="img__container">
                <img src="data:image/jpeg;base64,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" alt="" />
              </div>
              <div className="product__bottom">
                <div className="rating">
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-full" />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-full" />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-full" />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-full" />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-empty" />
                    </svg>
                  </span>
                </div>
                <h3>Junior Doctors</h3>
                              
              </div>
            </div>
            <div className="product">
              <div className="img__container">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjAdbqSX7SqF4NPJzUE4TmWYfvYLDxf4LKBSCLyrfxf6dmAl1buxWZ39ndLsyRi364p7w&usqp=CAU" alt="" />
              </div>
              <div className="product__bottom">
                <div className="rating">
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-full" />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-full" />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-full" />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-full" />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-empty" />
                    </svg>
                  </span>
                </div>
                <h3>junior Doctors</h3>
                              
              </div>
            </div>
            <div className="product">
              <div className="img__container">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkhky7U6fWNaCMnfZnyfbef4lNpyGBIdjpbA&usqp=CAU" alt="" />
              </div>
              <div className="product__bottom">
                <div className="rating">
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-full" />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-full" />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-full" />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-full" />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-empty" />
                    </svg>
                  </span>
                </div>
                <h3>junior Doctors</h3>
                              
              </div>
            </div>
            <div className="product">
              <div className="img__container">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY-bzJulKATAbtB7RSiHqK5EObvQhuCZNglWc9r66SSxiLKphPpDSZ0LTV-xUuC8pE9W8&usqp=CAU" alt="" />
              </div>
              <div className="product__bottom">
                <div className="rating">
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-full" />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-full" />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-full" />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-full" />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-empty" />
                    </svg>
                  </span>
                </div>
                <h3>junior Doctors</h3>
                              
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}
