import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URI;
import java.net.URL;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

// class app {
//     public static void main(String[] args) throws IOException, InterruptedException {
//         final String GET_URL = "http://127.0.0.1:5500/Frontend/JS/app.js";

//         //  HttpClient client = HttpClient.newHttpClient();
//         //  HttpRequest request = HttpRequest.newBuilder()
//         //  .uri(URI.create("http://127.0.0.1:5500/Frontend/JS/app.js"))
//         //  .build();

//         //  HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
//         //  System.out.println(response.body());

//         //  System.out.println();

//         URL obj = new URL(GET_URL);

//         HttpURLConnection con = (HttpURLConnection) obj.openConnection();
//         con.setRequestMethod("GET");

//         int getResponseCode = con.getResponseCode();

//         if (getResponseCode == HttpURLConnection.HTTP_OK) {;
//             BufferedReader in = new BufferedReader(new InputStreamReader(
//                     con.getInputStream()));
//             String inputLine;
//             StringBuffer response = new StringBuffer();

//             while ((inputLine = in.readLine()) != null) {
//                 response.append(inputLine);
//             }
//             in.close();

//             // print result
//             System.out.println(response.toString());
//         } else {
//             System.out.println(getResponseCode);
//             System.out.println("GET request not worked");
//         }
//     }
// }

class app extends HttpServlet {
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String lang = request.getParameter("#language");
        System.out.println(lang);
    }
}