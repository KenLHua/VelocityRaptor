function demo1() {
    alert('Hello!', { title: 'Demo Alert', button: 'Go!' }, function() {
        confirm(
            'Ok?',
            function(o) {
                o
                    ? alert('Good, good!')
                    : confirm(
                          'No?',
                          function(o) {
                              console.log('NO!'),
                                  o ? alert('Good!') : alert('Cry... :/');
                          },
                          { done: 'No, no... Good!', cancel: 'No.' }
                      );
            },
            {
                title: 'Demo Confirm',
                done: { text: ':)' },
                cancel: { text: ':(', default: !0 },
            }
        );
    });
}
new customAlert(),
    demo1(),
    (document.querySelector('code').innerHTML = demo1.toString());
