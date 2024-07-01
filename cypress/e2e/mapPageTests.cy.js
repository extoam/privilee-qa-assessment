
// Cypress Test Cases for Privilee website - Map page

// ************************************************************************************
//
// Test  Coverage:
//
// Test Suite#1 MapPage UI Controls Verification
// Test Suite#2 MapPage Performance validation/ Checking Response time of fetching venues 
// Test Suite#3 Functional tests:
// 
//  Covered Functional Test included the following tests:
// # Venues List functionality tests
// # Filter functionality tests
// # Search functionality tests
// # Data Accuracy tests for a fetched Venue
// # MapBox verification tests
// # "Explore Privilee" submission form tests
// 
// ************************************************************************************


describe('Test Suite#1 - Map Page UI Verification/ Page Elements are present', () => {
    beforeEach(() => {
        cy.visit('https://staging-website.privilee.ae/map');
    });

    //Verify if proper URL is opened
    it('1. check if Map page is opened successfully', () => {
      
        cy.url().should('include', '/map');
    });

    //Check if categories buttons are present on the Page
    it('2. check if  categories buttons is displayed on the page', () => {
      
        cy.contains('.sc-210e007d-0', 'Pool & beach');
        cy.contains('.sc-210e007d-0', 'Fitness');
        cy.contains('.sc-210e007d-0', 'Family activities');
        cy.contains('.sc-210e007d-0', 'Dining');
    });

    //Check if Venues list is shown on the page
    it('3. check if a list of Pool & beach venues are shown', () => {
      
        cy.get('.gfATCS.sc-428108d3-3') 
          .should('be.visible')
          .children()
          .should('have.length.greaterThan', 0); 
    });
        
    //Check If Filter button and Module Dialog present on the page 
    it('4. check if Filter button and Module Dialog are present', () => { 
        cy.get('.hzJRoq.sc-428108d3-5');
        cy.get('.hzJRoq.sc-428108d3-5').click();
        cy.get('.bGBlHN.sc-5180758e-1');
        cy.contains('.bGBlHN.sc-5180758e-1', 'Filter your search');
    });

    //Check If Search Bar is displayed on the Page 
    it('5. check if Search Bar is displayed on the Page', () => { 
        cy.get('.sc-c744ec56-5').should('be.visible');;
    });

    // Check if Join button is on the Page  
    it('6. Check if Join button is on the Page  ', () => {
        cy.contains('.iQvPOz.sc-8699da68-3', 'Join Privilee today!');
    });

    //Check if MapBox map exists on the page 
    it('7. Check if MapBox  is present on the page  ', () => {
        cy.get('.mapboxgl-canvas');
        cy.get('.mapboxgl-canvas').should('be.visible');
    });

  });


describe('Test Suite#2 - Map Page Performance Validation: Check response time of requests', () => {

    // Verify reponse time of fetching  Pool & beach venues
    it('1. Check response time of fetching Pool & beach venues - api/map/hotel', () => {
        let startTime;
          
        cy.intercept('GET', 'https://staging-website.privilee.ae/api/map/hotel', (req) => {
        startTime = new Date().getTime();
         req.continue(); 
              }).as('getRequest');
          
        cy.visit('https://staging-website.privilee.ae/map'); 
    
        cy.wait('@getRequest').then((interception) => {
                const endTime = new Date().getTime();
                const responseTime = endTime - startTime;
          
    // Log the response time
        cy.log(`Response time: ${responseTime}ms`);     

    // Assert the response time is within an acceptable range
        expect(responseTime).to.be.lessThan(1000); 
        });
    });
    
    // Verify reponse time of fetching  Fitness venues
    it('2. Check response time of fetching Fitness venues - api/map/fitness', () => {
         let startTime;
                  
      cy.intercept('GET', 'https://staging-website.privilee.ae/api/map/fitness', (req) => {
        startTime = new Date().getTime();
        req.continue(); 
      }).as('getRequest');
  
      cy.visit('https://staging-website.privilee.ae/map');
      cy.get('.sc-210e007d-0 > :nth-child(3)').click();
      
      cy.wait('@getRequest').then((interception) => {
        const endTime = new Date().getTime();
        const responseTime = endTime - startTime;
  
        // Log the response time
        cy.log(`Response time: ${responseTime}ms`);
  
        // Assert the response time is within an acceptable range
        expect(responseTime).to.be.lessThan(2000); 
      });                  
    });

    // Verify reponse time of fetching  Family venues
    it('3. Check response time of fetching Family venues - api/map/family', () => {
      let startTime;
            
      cy.intercept('GET', 'https://staging-website.privilee.ae/api/map/family', (req) => {
        startTime = new Date().getTime();
        req.continue(); 
      }).as('getRequest');
  
      cy.visit('https://staging-website.privilee.ae/map');
      cy.get('.sc-210e007d-0 > :nth-child(4)').click();
      
      cy.wait('@getRequest').then((interception) => {
        const endTime = new Date().getTime();
        const responseTime = endTime - startTime;
  
        // Log the response time
        cy.log(`Response time: ${responseTime}ms`);
  
        // Assert the response time is within an acceptable range
        expect(responseTime).to.be.lessThan(2000); 
      });            
          
    });

    // Verify reponse time of fetching  Dining venues
    it('4. Check response time of fetching Dining venues - api/map/restaurant', () => {
      let startTime;
        
      cy.intercept('GET', 'https://staging-website.privilee.ae/api/map/restaurant', (req) => {
        startTime = new Date().getTime();
        req.continue(); 
      }).as('getRequest');
  
      cy.visit('https://staging-website.privilee.ae/map');
      cy.get('.sc-210e007d-0 > :nth-child(5)').click();
      
      cy.wait('@getRequest').then((interception) => {
        const endTime = new Date().getTime();
        const responseTime = endTime - startTime;
  
        // Log the response time
        cy.log(`Response time: ${responseTime}ms`);
  
        // Assert the response time is within an acceptable range
        expect(responseTime).to.be.lessThan(2000); 
      });        
    });
         
});


describe('Test Suite#3 - Map Page Functional Tests', () => {
    beforeEach(() => {
        cy.visit('https://staging-website.privilee.ae/map');
    });


    it('1. Check if Pool & beach venues are listed, venue dialog can be opened', () => {
      //verify if Pool&Beach category is selected
        cy.get('.eSPTBF').click();
        cy.contains('.sc-428108d3-1', '89 pool & beach venues');   
      //verify if venues are listed  
        cy.get('.gfATCS.sc-428108d3-3') 
          .should('be.visible')
          .children()
          .should('have.length.greaterThan', 0);    

      //check if the first venue from the list is opened for preview poperly   
        cy.get('[data-item-id="XX4MuRAAAB4A5teu"] > .sc-58387120-10 > .sc-e2b9ce20-0 > .sc-e2b9ce20-1 > .keen-slider > :nth-child(1) > img').click();
        cy.contains('.hOtZWn.modal-base-dialog.sc-2c74a223-4','Anantara The Palm Dubai Resort'); 
    });

    it('2. Check Fitness Category', () => {
        //select Fitness categories and check listed venues
        cy.get('.sc-210e007d-0 > :nth-child(3)').click();
        cy.wait(1000);
        cy.contains('.sc-428108d3-1', 'fitness venues');  
        cy.get('.sc-428108d3-1').should('have.text', '181 fitness venues' );  
    
      });
    
    it('3. Verify Filter Modal Dialog', () => {
      //Open filter Popup and verify filter categories
      cy.get('.sc-428108d3-5').click();
      cy.wait(1000);
      cy.contains('.jwOHhY.modal-base-content.sc-2c74a223-6', 'Filter your search');
      cy.contains('Dubai').should('be.visible');
      cy.contains('Abu Dhabi').should('be.visible');
      cy.contains('Sharjah').should('be.visible');
      cy.contains('Ras Al Khaimah').should('be.visible');
      cy.contains('Ajman').should('be.visible');
      cy.contains('Fujairah').should('be.visible');

      
    });

    it('4. Verify Filter selection', () => {  

       //Select Location "Dubai" and Venue type "Hotel", check filter result - 35 venues

       cy.get('.sc-428108d3-5').click();
        cy.wait(1000);
       
        //Select filter options in the popup
        cy.get(':nth-child(2) > .sc-5180758e-6 > :nth-child(1)').should('be.visible').then(($element) => {
          cy.log('Element found and visible:', $element);
          $element.click();
        });
        
        cy.get(':nth-child(3) > .sc-5180758e-6 > :nth-child(1)').click();
        cy.get('.sc-5180758e-9').click();
       
        //verify results
        cy.wait(2000);
        cy.get('.sc-428108d3-1').should('have.text','35 pool & beach venues');

        cy.get('.sc-428108d3-3.gfATCS.sc-428108d3-3') 
        .should('be.visible')
        .children()
        .should('have.length', 35); 

    });
        
    it('5. Search bar verification', () => {
        cy.get('.eSPTBF').click();
       // Type into the search input field
        cy.get('.sc-c744ec56-5').type('JA Beach Resort');

        // Check that the input field contains the entered text
        cy.get('.sc-c744ec56-5').should('have.value', 'JA Beach Resort');

        //Clear the search bar
        cy.get('.eYodME.sc-c744ec56-1 > button:nth-of-type(2)').click();

        // Check if a venue is opned from search  
        cy.get('.sc-c744ec56-5').type('JA Beach Resort');
        cy.get('.sc-c744ec56-5').type('{enter}');
        cy.wait(1000);
        cy.get('.sc-3e858505-1');
        cy.get('.sc-3e858505-2').click(); 
      
    });

     it('6. Check Submission of Explore Privilee venues form', () => {
       
        cy.get('.sc-c744ec56-5').type('JA Beach Resort');
        cy.get('.sc-c744ec56-5').type('{enter}');
        cy.wait(1000);
      //Verify if Explore Privilee venues Popup is shown
        cy.get('.sc-3e858505-1');
        cy.contains('.sc-3e858505-1', 'Explore Privilee venues');
      // Fill in user information
        cy.get('[placeholder="First name"]').type('testName');
        cy.get('[placeholder="Email"]').type('privilee.qa2@mailforspam.com'); // random email needs to be prepopulated
        cy.get('.sc-2925c450-3 > .sc-1e135652-0').type('080808080');
      //Submit form
        cy.get('.sc-c55f6c43-0').click();


      // verify if form is submitted and the URL is updated 
      cy.url().then((url) => {
        if (url.includes('/map?form=leadsuccess')) {
          cy.log('URL check passed, form is submitted');
        } else {
          const errorMessage = `Expected URL to include '/map?form=leadsuccess', but got '${url}'`;
          cy.log(errorMessage);
          cy.screenshot('url-check-failure');
          throw new Error(errorMessage);
        }
      });

      });
       
    it('7. Check Venue details information in the modal dialog - Data Accuracy Check', () => {  
       
      //Open Venue modal popup from the search
        cy.get('.sc-c744ec56-5').type('JA Beach Resort');
        cy.get('.sc-c744ec56-5').type('{enter}');
        cy.get('.sc-3e858505-2').click();

      //Check Venue  information on the modal dialog
        cy.contains('.sc-d200ac9f-1','JA Beach Resort');
        cy.contains('.sc-d200ac9f-5', 'Opening hours:');
        cy.contains('.sc-d200ac9f-5', '09:00 - 18:30');

      //Data verifiction in Hotel venue modal popup
        cy.get('.sc-d200ac9f-2').should('have.text', 'JA Beach Resort')
        cy.get('.sc-d200ac9f-6').should('have.text', 'Opening hours:')
        cy.get('.sc-d200ac9f-7').should('have.text', '09:00 - 18:30')
        cy.get('.sc-d200ac9f-9 > div > :nth-child(1)').should('have.text', `This 128-acre five-star resort is a ‘magical Privilee daycation wonderland’ that you won't ever want to leave! With access to a stunning golden sand beach, multiple pools, gym, spa and activity centre, there will be something for the whole family to enjoy. From flood-lit tennis courts, crazy golf, a bird sanctuary, squash courts, badminton, table tennis plus multiple restaurants and bars, you’re sure to find something to suit you.`)
        cy.get(':nth-child(7) > .sc-62f80698-2 > .sc-62f80698-3').should('have.text','Club Jumana Gym7:00 - 19:00')
     });


    it('8. Check expanding Restaurants list in the modal dialog, verify Restaurant image', () => {      
      // Open Hotel modal popup
        cy.get('.sc-c744ec56-5').type('JA Beach Resort');
        cy.get('.sc-c744ec56-5').type('{enter}');
        cy.get('.sc-3e858505-2').click();
        cy.contains('.sc-d200ac9f-1','JA Beach Resort');
      //Expand  Restaurants details and check if Restaurant's image is present
        cy.get(':nth-child(9) > .sc-62f80698-6 > .sc-35d510f6-2 > .sc-35d510f6-4 > :nth-child(1) > .sc-35d510f6-6').should('have.attr', 'src', 'https://images.prismic.io/privilee/144e09d1-d1d1-4efb-9c89-7d871f38d0ad_JA+Resort+-+Anchor+Pool+Bar.png?auto=compress,format');
    });


    it('9. MapBox  verification', () => {   
      // mapboxgl visibility
        cy.get('.mapboxgl-canvas');
        cy.get('.mapboxgl-canvas').should('be.visible');

        cy.get('.a:nth-of-type(1)  .iEpxPs.sc-58387120-4').click();
        cy.wait(2000);
        cy.get('.mapboxgl-popup-tip').should('be.visible');
        cy.get('.mapboxgl-popup.mapboxgl-popup-anchor-bottom').should('be.visible');

        // check the dimensions of the canvas
        cy.get('.mapboxgl-canvas').should('have.css', 'width').and('not.eq', '0px');
        cy.get('.mapboxgl-canvas').should('have.css', 'height').and('not.eq', '0px');
    });

});

  




  