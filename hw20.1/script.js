$(document).ready(function() {
    $('#addTask').click(function() {
        let taskText = $('#taskInput').val().trim();
        if (taskText !== "") {
            let li = $('<li>').html(`${taskText} <button class="delete">×</button>`);
            $('#taskList').append(li);
            $('#taskInput').val('');
        }
    });

    $('#taskList').on('click', 'li', function(event) {
        if (!$(event.target).hasClass('delete')) {
            $('#modalTaskText').text($(this).text().replace('×', ''));
            $('#taskModal').modal('show');
        }
    });

    $('#taskList').on('click', '.delete', function(event) {
        $(this).parent().remove();
        event.stopPropagation();
    });
});