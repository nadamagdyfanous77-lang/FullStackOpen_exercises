```mermaid
sequenceDiagram
    participant User
    participant Browser
    participant Server
    User->>Browser:The user input.
    Browser->>Server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    Server->>Browser: HTTP status code 201 Created
    
```