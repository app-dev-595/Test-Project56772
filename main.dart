import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class EventOrganizersPage extends StatefulWidget {
  @override
  _EventOrganizersPageState createState() => _EventOrganizersPageState();
}

class _EventOrganizersPageState extends State<EventOrganizersPage> {
  List<dynamic> eventOrganizers = [];

  Future<void> fetchEventOrganizers() async {
    try {
      final response = await http.get(Uri.parse('http://your-api-url/event-organizers'));
      if (response.statusCode == 200) {
        final data = json.decode(response.body);
        setState(() {
          eventOrganizers = data;
        });
      } else {
        print('Error fetching event organizers: ${response.statusCode}');
      }
    } catch (error) {
      print('Error fetching event organizers: $error');
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Event Organizers'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            ElevatedButton(
              onPressed: fetchEventOrganizers,
              child: Text('Fetch Event Organizers'),
            ),
            SizedBox(height: 20),
            ListView.builder(
              shrinkWrap: true,
              itemCount: eventOrganizers.length,
              itemBuilder: (BuildContext context, int index) {
                return ListTile(
                  title: Text(eventOrganizers[index]['name']),
                );
              },
            ),
          ],
        ),
      ),
    );
  }
}