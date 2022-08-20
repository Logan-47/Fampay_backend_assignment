# Fampay Backend Assignment

## API Documentation

1. Ping API: server health check url
   - curl request
     ```
        curl --location --request GET 'http://localhost:3000/api/ping' \
     ```
   - Expeced response
     `{ "message": "pong" }`
2. Video List API: returns paginated list of all videos stored in database

   - curl request

     ```
     curl --location --request GET 'http://localhost:3000/api/videos?page=0&limit=5&sortby=createdAt'


     // page: page number [optional] [default = 0]
     // limit: to limit the number of results [optional] [default = 10]
     // q: fuzzy search on title and description of the videos
     // sortBy: to get ordered result of the basis of passed parameter [Optional] [default = publishedAt]
     ```

   - Expected Response
     ```json
     {
       "videos": [
         {
           "thumbnails": {
             "default": {
               "url": "https://i.ytimg.com/vi/zUA1_X9q-bM/default.jpg",
               "width": 120,
               "height": 90
             },
             "medium": {
               "url": "https://i.ytimg.com/vi/zUA1_X9q-bM/mqdefault.jpg",
               "width": 320,
               "height": 180
             },
             "high": {
               "url": "https://i.ytimg.com/vi/zUA1_X9q-bM/hqdefault.jpg",
               "width": 480,
               "height": 360
             }
           },
           "_id": "6300aa8a615b51814b246d6e",
           "title": "PUBG MOBILE LITE🤣 BEST COMEDY VIDEOS 🤣SIGMA RULE @Cartoon Freak # #viralvideo #pubglite",
           "channelId": "UC2n-F48-I_R2c2i7k9dvdqA",
           "videoId": "zUA1_X9q-bM",
           "description": "PUBG MOBILE LITE BEST COMEDY VIDEOS SIGMA RULE @Cartoon Freak # #viralvideo #pubglite pubg mobile lite ...",
           "publishedAt": "2022-08-20T09:33:25.000Z",
           "createdAt": "2022-08-20T09:34:02.130Z",
           "updatedAt": "2022-08-20T09:34:02.130Z",
           "__v": 0
         }
       ],
       "hasPrev": false,
       "hasNext": false,
       "totalCount": 1,
       "totalPages": 0
     }
     ```

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
