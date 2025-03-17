$(document).ready(() => {
    $("#addTask").click(() => {
        const taskText = $("#taskInput").val().trim();
        if (taskText !== "") {
            const li = $(
                `<li class="list-group-item d-flex justify-content-between align-items-center">
                            <span class="task-text">${taskText}</span>
                            <button class="delete btn btn-danger btn-sm">×</button>
                        </li>`
            );
            $("#taskList").append(li);
            $("#taskInput").val("");
        }
    });

    $("#taskList").on("click", ".delete", function() {
        $(this).parent().remove();
    });

    $("#taskList").on("click", ".task-text", function() {
        const taskText = $(this).text();
        $("#modalTaskText").text(taskText);
        $("#taskModal").modal("show");
    });
});