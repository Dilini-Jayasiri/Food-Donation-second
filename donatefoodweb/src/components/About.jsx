import React from 'react'

 const About = () => {
  return (
    <div>
        <section id="about">
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-md-6">
                        <img src="/assets/about.gif" alt="About" className="w-75 mt-5"/>
                    </div>
                    <div className="col-md-6">
                        <h3 className="fs-5 mb-0">About Us</h3>
                        <h1 className="display-6 mb-2">Who <b> We</b> Are</h1>
                       <hr className="w-50"/>
                    <p className="lead mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto reprehenderit vel atque recusandae eius blanditiis quasi sit saepe rem nesciunt. Eligendi consequuntur neque in iure mollitia nulla, nisi saepe illum modi aliquid quos reiciendis quia explicabo eos? Est harum quos, nostrum magnam doloribus id dolores molestias veritatis perferendis explicabo qui.</p>

                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default About;