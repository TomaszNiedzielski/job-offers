let initialState = [
    {
        id: "4jrng45jgr",
        title: "IOS Developer",
        description: "<p><strong>For our mobile communication apps. we’re looking for an experienced mobile developer with the following required skillset:</strong></p><p><br></p><ul><li>3+ years of professional experience in iOS native development.</li><li>Strong knowledge iOS SDK, different versions of iOS, and how to deal with different screen sizes and popular third-party libraries</li><li>Strong understanding of mobile development life cycle, mobile technologies, and architecture.</li><li>Proven experience integrating with mobile platform functionality: Address book, vocoder, etc.</li><li>Track record of deploying stable applications to the applicable application platforms (app Store/ TestFlight).</li><li>Strong background in SW development methodologies: Source control (git), issue tracking.</li></ul><p><br></p><p><strong>Advantageous skillset:</strong></p><p><br></p><ul><li>Integrating external libraries into native environment.</li><li>Experience with iOS UI design principles, patterns</li><li>Familiarity with signaling protocols and methodologies (SIP/MQTT/etc.)</li></ul><p><br></p><p><strong>On top of the technical requirements above, we should add the following skills for all positions:</strong></p><p><br></p><ul><li>Strong communication skills</li><li>Strong documentation skills</li><li>Strong team player</li><li>Ability to work with teams in different geographical locations</li></ul><p><br></p>",
        created_at: "2020-09-15 14:12:01",
        company: {
            name: "Apple",
            website: "www.apple.com",
            location: "California, United States",
            logo: "https://yt3.ggpht.com/a/AATXAJzLJovKyZ7JLdndJ5foqqFL-Xt8Zm28UtEuFRW2Gg=s900-c-k-c0xffffffff-no-rj-mo"
        },
        salary: {
            from: 20000,
            to: 25000
        }
    },
    {
        id: 'Df43gdf3',
        title: "Senior C# developer",
        description: "<p><strong>Job description:</strong></p><p><br></p><ul><li>Design and implementation of front-end and back-end</li><li>Develop software applications from concept to deployment and testing.</li><li>Work closely with user during the life-cycle of the project.</li><li>Cooperate closely with client developers as a single SCRUM team.</li></ul><p><br></p><p><strong>Requirements:</strong></p><p><br></p><ul><li>C# experience (.NET ecosystem)&nbsp;</li><li>Angular (version 5 or higher)&nbsp;</li><li>MS SQL (Entity Framework) and database architecture.</li><li>Web API</li><li>TypeScript and JavaScript experience.</li><li>Written and spoken English skills</li><li>Basic version control (e.g. GIT, SVN).</li><li>Self-motivation, communication skills and ability to work remotely are essential.</li></ul><p><br></p><p><strong>We offer:</strong></p><p><br></p><ul><li>Salaries comparable to Western European level.</li><li>Home-office work style.</li><li>Possibility to negotiate working times and cooperation type.</li></ul><p><br></p><p><strong>Nice to have:</strong></p><p><br></p><ul><li>.Net desktop development</li><li>AWS</li><li>Swift Mac development&nbsp;</li><li>JIRA</li></ul><p><br></p>",
        created_at: "2020-09-16 15:12:01",
        company: {
            name: "Online World",
            website: "www.online-world.com",
            location: "/london, England",
            logo: "https://yellowbrickstudiousa.com/wp-content/uploads/2014/05/Online-World.jpg"
        },
        salary: {
            from: 30000,
            to: 50000
        }
    }
];

//localStorage.clear();

let offersFromStorage = localStorage.getItem('offers');
if(offersFromStorage) {
    offersFromStorage = JSON.parse(offersFromStorage);
    console.log(offersFromStorage);
    initialState = offersFromStorage.concat(initialState);
    console.log(initialState);
}

console.log(initialState);

const offersReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_OFFER':
            state.unshift(action.payload);

            //define offers array
            let offers = [];
            // get offers from storage
            let offersFromStorage = localStorage.getItem('offers');
            if(offersFromStorage) {
                offersFromStorage = JSON.parse(offersFromStorage);
                offers = offersFromStorage;
                offers.unshift(action.payload);
            } else {
                offers.unshift(action.payload);
            }

            localStorage.setItem('offers', JSON.stringify(offers));          
            return state;
            break;
        default:
            return state;
    }
}

export default offersReducer;