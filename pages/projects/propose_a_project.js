import React from 'react'
import classes from '../../styles/globalStyle.module.scss'
import BigCard from '../../components/cards/general/bigCard'
import VideoCard from '../../components/cards/general/videoCard'
import Card1 from '../../components/cards/projectCards/card1'
import Card2 from '../../components/cards/projectCards/card2'

function index() {
    return (
        <div className={classes.section}>
            <div className={classes.headingSection}>
                <h1 className={classes.heading}>
                    Propose a New Project
                </h1>
            </div>

            <div className={classes.headingSection}>
                <div className={classes.textBox}>
                    <div className={classes.title} >
                        Hyperledger labs
                    </div>
                    <p>
                        Hyperledger Labs provides a space (i.e., GitHub repos) where work can easily be started without the creation of a project. Please refer to the Hyperledger Labs wiki page for additional information.
                    </p>
                    <div className={classes.title} >
                        Process to propose a new lab
                    </div>
                    <p>Fork the hyperledger-labs.github.io repository.</p>
                    <p>Fill out the Proposal Template and save it into the labs subdirectory under the name of your lab, such as mynewlab.md. It is expected that your lab repository will have the same name so keep that in mind.</p>
                    <p>In the Proposal Template, there is an entry for sponsor(s). Although not required, proposers are encouraged to seek a sponsor who can help them create ties with the rest of the Hyperledger community and ensure that the proposal is cogent and novel (in conception, proposed execution, or interested community).To find sponsors:</p>
                    <p>
                        use your connections to existing projects and ask maintainers,
                        find working groups or projects with affinities to the proposed lab and pitch the project (good to have the template already filled out) in associated channels and/or mailing lists. The WG chairs emails, the maintainers contacts etc can be found on the wiki or github. Make personal appeals if you can. Every repository contains a MAINTAINERS file that lists the current maintainers with their contact information and you can reach them all by posting to the Maintainers list.
                        Commit your changes with proper sign-off. This means that your commit log message must contain a line that looks like the following one, with your actual name and email address:

                    </p>
                    <p>
                        Signed-off-by: John Doe john.doe@example.com
                        Adding the -s flag to your git commit command will add that line automatically. You can also add it manually as part of your commit log message or add it afterwards with git commit --amend -s
                    </p>
                    <p>
                        Submit a Pull Request.
                        The labs stewards will then review your proposal. Like sponsors, stewards do not have a responsibility beyond this; ongoing work like contributing code or reviews is not tied to their role as stewards. In reviewing the proposal, the stewards make sure that the proposal is cogent and novel (in conception, proposed execution, or interested community).
                    </p>
                    <div className={classes.title} >
                        Bringing in an existing repository
                    </div>

                    <p>
                        By default the Lab stewards will create a new repository for you to start from but if you have an existing github repo you would like to bring to your proposed lab you have the option to request for that repo to be reused instead. This is however only possible if every commit in your existing repo is signed-off so there is no DCO related issues. If that is not the case, you will need to bring your code by squashing all of your commits into a single first commit made against your new lab repo with your sign-off.
                    </p>
                    <div className={classes.title} >
                        License requirement
                    </div>

                    <p>
                        All Hyperledger software must be made available under an Apache 2.0 license. This applies to Labs. Please, make sure to license all incoming code and new code accordingly, and ensure that all commits are made with proper sign-off so that no DCO related issue is introduced.
                    </p>
                    <div className={classes.title} >
                        Code of Conduct
                    </div>
                    <p>
                        All Hyperledger community members must adhere to the Code of Conduct.
                    </p>
                </div>
            </div>

        </div>

    )
}

export default index