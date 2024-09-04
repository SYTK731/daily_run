$(document).ready(function() {
    // ローカルストレージからタグデータを取得
    var tags = JSON.parse(localStorage.getItem('tags')) || [];

    // タグクラウドにタグを表示する関数
    function displayTags() {
        $('#tag-cloud').empty();
        tags.forEach(function(tag) {
            $('#tag-cloud').append('<div class="tag" data-info="' + tag.info + '">' + tag.name + '</div>');
        });

        // タグクリック時の動作
        $('.tag').click(function() {
            var info = $(this).data('info');
            $('#info-panel').text(info).show();
        });
    }

    // 初期表示
    displayTags();

    // フォーム送信時の動作
    $('#add-tag-form').submit(function(event) {
        event.preventDefault();

        var tagName = $('#tag-name').val();
        var tagInfo = $('#tag-info').val();

        var newTag = {name: tagName, info:tagInfo};
        tags.push(newTag);

        // ローカルストレージに保存
        localStorage.setItem('tags',JSON.stringify(tags));

        // フォームクリア
        $('#tag-name').val('');
        $('#tag-info').val('');

        // タグを再表示
        displayTags();
    });
});