WELCOME TO MY GREENJINN ASSIGNMENT

These are the steps I followed to refactor my react code into Next.js taking advantage of the server side rendering via serverSideProps()

1. Created next project from scratch to refactor react code without corrupting it
2. Added modifications to support material-ui
3. It was a little tricky to work around the fact that next.js does not have built-in support for styled components because of its server side rendering nature
4. Once styled components were ready, time came to create css modules for the custom css part of the project. There was no need to refactor client-side api fetchs at this moment as they worked OK from the beginning.
5. Transfered api fetch logic to serverSideProps function. this adds functionality, SEO optimization, security and eliminated the need for a workaround for CORS.
6. Once serverSideProps was ready, the code evidently has more readability, scalability and security. Furthermore, the data is fetched far quicker than in the plain React app.


You can read the steps I followed to create the initial React App here:


    Decided App and components layout on pen and paper.

    Created react app, Github repo and pushed new project.

    Decided on Material UI for interface and installed package

    Created a basic layout for the app and a fake array to mimic the amount of buttons

    Fetched pairs data to display actual value of the buttons

    First approach to logic of pair choosing with pseudocode. Decided on keeping one state just to ensure the order was odd and even. This might need a later approach on how to avoid choosing the same option twice.

    Once the object with the trading pair was correctly created, it can be passed via props to the component that shall show the data. It has its own async function to fetch the data according to the chosen pair.

    Some styling was needed on the buttons, used display:grid to uniform the layout and tried to keep the buttons section as small as possible to have future room for the display of the values.

    useEffect() is used in the SelectedPairValues component to display updated data.

    SelectedPairValues was renamed GJNumbersView

    Modified the object on TradingPairsContainer to be passed as props to GJNumbersView to include the pair description.

    after attempting several material UI elements for GJNumberLabel, created my own card

    Formatted dates. At this point I noticed the app was malfunctioning and bringing the correct data only one out of 2 times. This had to do with the state which decides the order of the pair. Started debugging.

    At this point I realized I had made a mistake comprehending the assignment and each "pair" was just ONE ticker. So my logic had been far more intrincate and complicated than needed. Started backpedalling. No frustration, just code.

    Changed all variable names to get familiar with the idea that I am dealing with just one pair, not a comparison of two pairs.

    Code refactored. Much simpler than originally thought.

    Finishing touches to refactoring: clearing selection and voiding GJNumbersView in case of user clearing selection.

    Time to tacke "Average Ticker Values". As always, will commence with a basic layout which then will be refined according to the nature of the data to be displayed.

    Fetched data and decided to reuse components GJNumbersView and GJNumberLabel to display data.

    Still not knowing which data to average, choose a value to test the functionality.

    Added responsivenes to average container via flexbox.

    Was informed that the data to use to get the avg value was "bid". Fortunately, it was the one I had chosen to test the app.

