require 'uri'
require 'net/http'
require 'openssl'
@object = [{ name: "mango-cubed", unit: "grams", quantity: 150 }, { name: "toasted cashews", unit: "cup", quantity: 0.75 }, { name: "balsamic vinegar", unit: "tablespoon", quantity: 1 }, { name: "ground cinnamon", unit: "teaspoon", quantity: 0.5 }, { name: "ground ginger", unit: "teaspoon", quantity: 0.25 }, { name: "salt", unit: "teaspoon", quantity: 0.125 }] 

url = URI("https://api.calorieninjas.com/v1/nutrition?query=chilled dry sparkling wine")
http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE
get_request = Net::HTTP::Get.new(url)
get_request["x-api-key"] = 'yFhkwaiAwI1NnhFNsRWEMA==5Adx9bOrBA17c3Jj'
get_request["x-api-host"] = 'api.calorieninjas.com'
response = http.request(get_request)
puts response.read_body