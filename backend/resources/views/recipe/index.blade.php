<!DOCTYPE html>
<html>
<head>
    <title>Create recipe</title>
</head>
<body>
    <h1>Create recipe</h1>

    <input type="text" id="name" placeholder="Name"><br>
    <input type="text" id="image" placeholder="Image URL"><br>
    <input type="text" id="category_id" placeholder="Category ID"><br>
    <input type="text" id="time" placeholder="Time"><br>
    <input type="text" id="time_unit" placeholder="Time Unit"><br>
    <input type="text" id="ingredients" placeholder="Ingredients"><br>
    <input type="text" id="method" placeholder="Method"><br>
    <input type="hidden" id="user_id" value="1">

    <button id="createRecipeBtn">Create Recipe</button>

    <script>
        document.getElementById('createRecipeBtn').addEventListener('click', function() {
            // Get input values
            const name = document.getElementById('name').value;
            const image = document.getElementById('image').value;
            const category_id = document.getElementById('category_id').value;
            const time = document.getElementById('time').value;
            const time_unit = document.getElementById('time_unit').value;
            const ingredients = document.getElementById('ingredients').value;
            const method = document.getElementById('method').value;
            const user_id = document.getElementById('user_id').value;

            // Send POST request to API endpoint
            fetch('{{ route('api.recipe.store') }}', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    image: image,
                    category_id: category_id,
                    time: time,
                    time_unit: time_unit,
                    ingredients: ingredients,
                    method: method,
                    user_id: user_id
                })
            })
            .then(response => response.json())
            .then(data => {
                console.log(data); // Handle response data
                alert(data.message); // Show success message
                // Optionally, redirect to another page or perform other actions after successful creation
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred while creating the recipe.');
            });
        });
    </script>
</body>
</html>
