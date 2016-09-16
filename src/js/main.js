var toolbar = [
      ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'pre', 'quote'],
      ['bold', 'italics', 'underline', 'strikeThrough', 'ul', 'ol', 'table', 'redo', 'undo', 'clear'],
      ['justifyLeft', 'justifyCenter', 'justifyRight', 'indent', 'outdent'],
      ['html', 'insertImage','insertLink', 'insertVideo', 'wordcount', 'charcount']
  ];

var html = '<h2>Try me!</h2><p>textAngular is a super cool WYSIWYG Text Editor directive for AngularJS</p>' +
				'<p><b>Features:</b></p><ol><li>Automatic Seamless Two-Way-Binding</li><li>Super Easy <b>Theming</b> Options</li>' +
				'<li style="color: green;">Simple Editor Instance Creation</li><li>Safely Parses Html for Custom Toolbar Icons</li>' + 
				'<li class="text-danger">Doesn&apos;t Use an iFrame</li><li>Works with Firefox, Chrome, and IE9+</li></ol> ' + 
				'<p><b>Code at GitHub:</b> <a href="https://github.com/fraywing/textAngular">Here</a> </p><h4>Supports non-latin Characters</h4>'

var tableHTML = '<table border="1" ><tbody> ' + 
	'<tr><td>sdfsdf</td><td>sdfs</td><td>sdfs</td></tr>'+
	'<tr><td>other</td><td>than</td><td>that</td></tr>'+
	'</tbody></table>';


    angular.module("app", ['textAngular'])
        .controller('main', ['$scope', 'textAngularManager', function wysiwygeditor($scope, textAngularManager) {
            $scope.version = textAngularManager.getVersion();
            $scope.versionNumber = $scope.version.substring(1);
            $scope.orightml = html;
			$scope.toolbar = toolbar;
            $scope.htmlcontent = $scope.orightml;
            $scope.disabled = false;

			$scope.appendTable = function() {
				$scope.htmlcontent = $scope.htmlcontent + tableHTML;
			};

        }]);
