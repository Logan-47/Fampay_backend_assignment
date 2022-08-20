# Fampay Backend Assignment

## Initial setup

1. Clone this Repository
   ` git clone https://github.com/Logan-47/Fampay_backend_assignment.git`
2. Add a `config.json` file with same structure as `sample.config.json` at root position of project directory

   ```
   <!-- Sample Config File -->
   {
      "port": 3001, // default 3000
      "api_domain": "",
      "api_keys": [],
      "yt": {
         "yt_search_category": "", default is cricket
         "yt_max_result_per_query": -1 // default 25
      },
      "database": {
         "uri": "" // mongodb connection uri
      }
   }

   ```

3. Make sure [Node](https://nodejs.org/en/) is installed.
4. Install all dependencies
   ```
   npm ci
   ```
5. run the project
   - to run in **development mode**: `npm run dev`
   - to run in **production mode**: `npm start`
