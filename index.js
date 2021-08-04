function myfunc() {
        const tech = [
          {
            topic: "Machine learning",
            desc: "At present, chatbots are not as evolved as virtual assistants. Though their ability to understand language  is comparable, their purpose is, generally speaking, to act as an informational kiosk. Their responses are more limited, providing directions to businesses within a mall, or answering the phone and offering a small selection of replies. Chatbots are used for a variety of different tasks such as phone interactions, online customer support, or assisting with online tech support. A large part of the chatbot’s growing popularity is based on the fact they are easy to deploy. As a consequence, they are often an organization’s first experience with machine learning.",
            img: `<img src = 'https://www.einfochips.com/blog/wp-content/uploads/2018/11/how-to-develop-machine-learning-applications-for-business-featured.jpg' width="700">`,
          },
          {
            topic: "AI",
            desc: "Autonomous driving technology continued to mature in 2020, with the industry’s leading companies testing driverless cars and opening up robotaxi services to the public in various cities. Fully automated driving, which enables rides without a human safety driver on board, will be necessary for the scalability and commercialization of autonomous driving. It typically takes years, if not decades, to develop a new vaccine. But by March 2020, vaccine candidates to fight covid-19 were already undergoing human tests, just three months after the first reported cases. The record speed of vaccine development was partly thanks to AI models that helped researchers analyze vast amounts of data about coronavirus.",
            img: `<img src = 'https://cloudsek.com/wp-content/uploads/2021/06/AIIA.png' width="700">`,
          },
          {
            topic: "Crypto",
            desc: "In the last six months, the crypto economy experienced significant milestones, fueling the record surge of the digital asset; and the industry is expected to preserve momentum even after rallies come to an end. Although we only just entered the second quarter of the year, we have seen a number of noteworthy developments in the field of cryptocurrencies, some of which are highlighted below. On April 20, 2021, Venmo announced it is adding crypto support to its platform, joining the long list of companies that recently began recognizing and accepting virtual currencies. As announced in the first week of April 2021, Square Inc., Fidelity and Coinbase are forming The Crypto Council for Innovation, with a mission to serve as the industry’s voice and “communicate cryptocurrencies’ benefits to policymakers, regulators and people around the world”. During that same week, Goldman Sachs announced it is making Bitcoin funds available to its wealthy clients, speeding up the institutional adoption of the virtual currency. The investment bank will soon be helping wealthy clients invest in cryptocurrency, through a new Digital Assets Group within its private wealth management division. ",
            img: `<img src = 'https://www.investopedia.com/thmb/BYFr8De8fW33eF9Cf7qJEkHbA2o=/1000x667/filters:fill(auto,1)/cryptocurrency-f6026a2012a14aaa9ef8a1c277fde0f7.jpg' width="700">`,
          },
          {
            topic: "Cloud computing",
            desc: "There is no uncertainty that in the coming years there will be an improvement in the performance of computers. This is only conceivable on account of hardware advancement through quantum computing. As innovation progresses, so does the need to build effectiveness and computational capacity to fulfill future needs. Quantum computing will empower computers and servers to process data at a quick pace contrasted with current benchmarks. Since the foundation of cloud computing is based on fast network systems that do get multiplied, cloud computing will play a critical job in expanding computing force and performance. So, the destiny of cloud computing in 2020 is going to shock us.",
            img: `<img src ='https://innovationatwork.ieee.org/wp-content/uploads/2019/09/bigstock-d-Rendering-Cloud-Computing-267217441_1024X684.jpg' width="700">`,
          },
          {
            topic: "Cyber security",
            desc: "Context - Aware Behavioral Analytics: The main problem here was that organizations were being bugged by meaningless security alerts that did not point to any attack. But with this innovation, they utilize sophisticated behavioral analytics to monitor and identify suspicious transactions and behavior. This technology is founded on the premise that unusual behavior spells nefarious doings. Thus activities like abnormal file movement along with activity across Target’s point of sale infrastructure is flagged as unusual behavior. This technology also monitors different aspect like bioprinting- the rate at which an employee can type, how they use the mouse. Companies as well use phone printing in analyzing acoustic information to identify spoof caller identifications.",
            img: `<img src = 'https://innovationatwork.ieee.org/wp-content/uploads/2019/11/bigstock-Internet-Security-Firewall-Or-326464240_1024X684.png' width="700">`,
          },
        ];
        let y = document.getElementById("box").value;
        let x = tech.find((tech) => tech.topic === y);
        if (x == undefined) {
          document.getElementById("demo").innerHTML = "enter valid domain name";
        } else {
          let z = " " + x.desc + " " + "<br>" + "<br>" + x.img;
          document.getElementById("demo").innerHTML = z;
        }
      }