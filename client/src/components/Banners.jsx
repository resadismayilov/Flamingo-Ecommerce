import React from 'react'

const Banners = () => {
  return (
    <section id='Banners'>
        <div className="container">
            <h2>Brendlər</h2>
            <div className="row gy-4">
                <div className="col-lg-2 col-6">
                    <div className="brand-box">
                        <img src="https://seeklogo.com/images/K/karaca-logo-3301940216-seeklogo.com.png" alt="" />
                    </div>
                </div>
                <div className="col-lg-2 col-6">
                    <div className="brand-box">
                        <img src="https://www.pasabahce.com/sites/catalogs/PublishingImages/logos-img/pasabahce_logo_2.png" alt="" />
                    </div>
                </div>
                <div className="col-lg-2 col-6">
                    <div className="brand-box">
                        <img src="https://kukma.ru/image/catalog/logo_kukmara2.png" alt="" />
                    </div>
                </div>
                <div className="col-lg-2 col-6">
                    <div className="brand-box">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAolBMVEX///8mO5cOK5ITLpOap8wYMJQhN5ayu9evuNUAI5Dc5PDFy+CcpsuFlcIGKJFAV6O6wdp1hLmKmMMAAIkAH48AG44AB4oAJJAAAIQcM5UADIv1+v3M1ed8i71bbK0pSZ5peLIAEowAF43n7vVhcq+ostLG0eUpP5lNYajY3usUPJm+xdzu8feUnsZofrikrM5vgbg6UqJFWqUtTKBgbq5QX6ZPow6dAAAJ80lEQVR4nO2ci3aquhZAI0gEqVQliChaFalYsT723v//a5ckgIAQq0eL7V1zjD40IWRKyEoCiBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACV0O9tms1V3LR7I55r+Djth3RV5FJ8I7Xa7yLI/rrsqj6HpIWTu+/OXSLHuujyGTvRjush3okP5Kw9i6Ee/zHc0nSK0fq+7No/Ao32oZpiz6Pi1N3XX5iE0ox9zPVtGf3S37so8BNq9RK3UbPFT8hey1hEa6qg1DL1m3XV5EP6a/w0/663HA+m+RCExbP7SaMjZNLfqrx2zAcD/J57b9bediZ681Clxj43a7JX+vm5Xj4L5FkU242wBxcRk2/dM1kcQbvqBTQxDUhQtCa/q3DAMaxK/2i4Mhq1ZynSrl5biz41ztI98AXnMpKf8o9FX7cfotV8OlqHgBkdODFtS9EpJBkwvciMBY8UmsxJJVWqcY6hnBWQgieEr3b/2EEP/QGSc2edlQ4Zjr9SvGGKpooBvMgz7toTz+/yiYVR3460w5C8zVPqVBXyD4bhDlGyVHUWWjLnIEDs484Hg9CzNGmInyyIsFJBn/lBD38icW7JN3pb9XVfXk72UGOJgPz0Y5HTSSods78cM8XHSy7BF+QJyib3eLNn+AYbe0UjqiSUraLrFnrrEUN6xLTcTxY63dRqZYSMzVCoGypkCyri/oWolfooVtMriUJlhOlHTA8K3x6vTtmpuiwKFAorc3XBPko5F63jlWYSGCLlvvI07x/StJzIcv8a9nqNVr7ZeMERoorEyjPRUex7DcOXwFkY+BZOvi4ZoxxvCIqnX0xiGH/wUUrBwGfKyIXphRxEH8ctnMRyvuKA9Feejhs5CaIj2LJ6SOPI/i+GBN1GyvZCvZSjWMh21VFTQoRVz4s/qSQw/eRdoXbwsp86zvWxFBVsGK4xnfA5Dn3eA1uV1ci/Xy1ZVkDX5+P2nMGxbXzyCRaoqyAdjPCY+heGB9TL29YvIVRX0WMQg7Hh/YdT2cEOfnTbK7KyeaitBTdct6Htq0tVUVvCNVs1g2fjIe9ltZfF5+d097eCcfT6Rp97RcGyz+PVxlrAnUoKVrmIsolckmR9VGk5owJB2qWE0js+isWA50yTegztSSeodDTssfFln16pCq5EimgGXGfKmOTkZ5rHfC+Xn0NKq3MdwzM4ZZX+WsM3Mv681dI00IpYY4jea0FfOEnjqn7SY+xj2mYh9PtZWMhP3aw3bNPzgQ4WhxE604kpJgnFa6rmPIZvyyudjGdVSGPgWw5A1jI+TIVYyEPq+byWF5xNl41TMXQy7RsUh3PU5S3yDIWv62EkNcdA/0WEHqUn/ndLC8bSfTc1E5bsYsn1UBeTU6TZDJTWsioe7x8dD3qERQSE3GRZbaY1jGlZj/Hopx209DesU6zac0ZhbvdiFbjTUC9GiRkPWZYsa6W2GWyXNVrMhb03nA7YMNxkGtGoS6zNrNmQVds7HM8UsVxqOM/1XzYZs5CT5oiy3GPrSqWnUbPiXdjSG8AaxWwxXmSBbsyGrChHenHKDIV+nIXxOWbMhC8yGMMsNhmytLQmy9RrywdWbMM/1hj02LdLiZa16DT0WLAJhnqsNu6xh8KkTqttwTRcwnKUwz7WGbrxwl3Rfz2AoDIfXGrr8EqLcS96o15AvNvSEea4zbPFrrHiVvlOz4b2PYXyNFWunpf9naKXiu22vMPTleHEpu3BXryEbeDviC2pfNfRecHKXg5W9BFlztGDx8CjMc9FQ2Xpuq3MgyeIjtnOjwGcY0wgnT5cNG4pmS6elR+ktf5NDzYashkSY5bJhFmwVXWo2PF4u4hpDTI7r4vY1G/bY7El4YfTLhli2gpK7HGo23PGuQpTlsiHG2JENctiWVqVmQxbyxUPvi4Z49TrtNfWqSWbNhvGCiijL5XgoWous3ZCXYZTfoc25aa0tQ92GfGFzIsjx0w35iSgJcvx0Q34dVBQvfrwhu4ov6k1/vOGaDU2t6lJ+vCEvxZlVptduaP9XQ36Z2zobTyY83tDpbbo50uvczFDe5VO7othWSgMLz8THGzacwkNR+TuGGrJhSJnkuXiEUVYFfq9C1W1732BYQEvH768lN6QIQ1sF7OIFNiruXv92w8wafJlh1U0PInTWnToV7fTbDTMX+8oMScVzEkLYNbbMAwQ58oYqURTHSO/c05TMs4nl0C0Uu8pQU87QTskH6SzVEK/QVxDyx3msblli3tDtTSaTXvIpb9gr8Z3FfIuzh/Y4+qRTZJLJui1Jruz0hfCLKSX3J6Ki4Y+lJ1cq/hLD5GmEknvZf4vh2OHdlnXW3fwWQ+TFS/LGtBAXf40haseKjpTvUn+PIfLihoq1f9ke+RcZovEhHmFg6++pU80btlXaiF0Ws9b0d9hi432aX2fzAi/+b8OXF/mTC8nzCy5LRh7bqEU/yOQLFNYv202yizDdEd1/3KS8u3xjy0yLh0aOdtiFZYbqkM7WOiN6VXU7jCrhDgfEGJj0GuSSDMzBsMX/G5gjNssxR9TDjEdBZMEux+p8I/pmwK8L/TW1DxOzmaA/+kd3O+TTwtbI5C1KH97lm69axEmH8NZhS5d5u/lx6YDuuK8sok92O+Ifc8eKP5/0Ihb9b/wqMyenEf2On+frkukiPjQTmf+dsnF2bxANk8I39p4vadtkR9HQ9HXFr8Lrg/t8t1c4JeloFysGMY7/cImhvJx7qeFkUWaI+iZNXszILDUMVqEZj/h6WcNwwCzW1BP59tJ0UZcbtk1/O7+rYVTSys6O6HHhXn1uuBjLf9BL0dAJguB1zQzX643Mjs6oqZpqbOiZTRTET1P0pIzh+4ifg4S2YX8UHuTEsDMat031voaRxcp2GnmKhnPkmh2/aIg70Ribps8Uc2QfWRUHffR37hFm2J+P0SY+rXLH0M0ZDrxwvtS5oRad4MfDvQ2j0v5akiM2jI5jYFW30rE64CajaMKqHBxmqODefhZPvXKGY94TuaMmN0StecDuTu1qwX5/ZCuB9zWMzgx1SmzZOf/2ltQQHRUiOg+PODV052wGvCHBcrk88OtAuVaKJmbUc3krbRwbopnEFhEDeRZtwmaX9zakuC+zN41otmEYi2S4GkcLk34IxIwNTZ62JKPRaEjD1zKqfnvIjtuQLjpseWBg+fUh62v2cQccR4uZKX2YEjvs/pDGzAb94p32kAWXgO5AHy2i0m+Z4F8gbLv0q4ySNUsejteniI+S+B/1F60k4r/ToKjz27xZrVv081f5ydZicdKNV770OKBHEb+b7IJ+ECzAt1WPv+PFo4TSb7IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgMfxP7c2z7ozOJQGAAAAAElFTkSuQmCC" alt="" />
                    </div>
                </div>
                <div className="col-lg-2 col-6">
                    <div className="brand-box">
                        <img src="data:image/png;base64,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" alt="" />
                    </div>
                </div>
                <div className="col-lg-2 col-6">
                    <div className="brand-box">
                        <img src="https://logowik.com/content/uploads/images/schafer3833.logowik.com.webp" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banners