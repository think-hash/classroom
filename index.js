import * as $ from "jquery";

$(function () {

    let count = 0;
    let students = [];
    let teachers = null;

    let student = $(".student");
    let teacher = $(".teacher");
    $(".stuBtn").on("click", () => {
        if (students.length >= 40) {
            alert("最多能添加40个学生")
        } else {
            let item = "<div class='item'>学生</div>";
            let b = $("<b>x</b>");
            b.on("click", evt => {
                $(evt.currentTarget).parent().remove();
                count--;
                students = students.slice(0, students.length - 1);
            });
            $(item).append(b).appendTo(student);
            students.push(count);
            count++;
        }
    });


    $(".teacherBtn").on("click", () => {
        if (teachers) {
            alert("老师只能有一个")
        } else {
            teacher.find(".platform").append("<div class='item'>讲桌</div>");
            teachers = "ok";
        }
    });
    $(".statBtn").on("click", () => {
        let msg = "";
        msg += "学生：";
        msg += students.length + "个";
        if (teachers) {
            msg += "\n已有老师";
        } else {
            msg += "\n未有老师";
        }
        alert(msg);
    })
});