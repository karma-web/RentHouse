const express = require('express')
const router = express.Router()
const Mock = require('mockjs')
const Random = Mock.Random

// 获取logo
router.get('/get_banner_logo_icon', function (req, res, next) {
  // 响应mock数据
  res.json(
    {
      'message': null,
      'code': 200,
      'data': {
        'logo': 'data:image/png;base64,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',
        'banner': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPIAAAAuCAYAAAASlETwAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2MEFFODVFREEzNzVFNjExOTk2M0Y5MDlEQzZGRUZFRCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2NUJDN0U2NzM2RDQxMUU3OERGNEI5Njk3NjZDNEM1NyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2NUJDN0U2NjM2RDQxMUU3OERGNEI5Njk3NjZDNEM1NyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjAzQTE1Q0Q5NzE5QUU2MTFCOTA1QjgxOEQyNTI4RUI0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjYwQUU4NUVEQTM3NUU2MTE5OTYzRjkwOURDNkZFRkVEIi8+IDwvcmRmOkRlc2NyaXB0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',
        'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAiCAIAAAB9SXZDAAADBElEQVRYCWNk869jGJSAaVC6CuSoUZeRHjWDN8xYCHqGkZHR01g13E7XQl22bdXBhXvPX5icg6mrY/WhFYcu7W5NtNNWQJM9ev2RU+XcZaVh2vJiR649XLLvwvEbj9HUYHIJuExOVGBRcYilhixEJ5ALZGjKimIaJMTLiSkIEbn84AWQwcbCrCEjCkQpbibrjl3LnLrxw9cfuLQAxfG5TFaU/2BHspQwHx79xEhtOXUTTVmQlZaCuIBr9fwvP36hScG5ONMZMBLnFQRR7qxbT9/svXAXbh+cYaQs1ZnkDudiMnC6zEFXETPFYOrHL/Lv//+cGVuAJFZliS5GwGjBKgUUxOmyRFcjXHqIFP/992/KxPUHL9/HpZ6ZiSnW0QCXLM50Zqslj0sPMeIHrzyomL/z3N1n+BXbgjLyQaxqcLps5o7TonzcaHpm7zwDFAGmXDRxIPf287dAElgiABHQWQ9evkdTs/X0zYevPqAJvvz4BU0EzmUko0YX4OaA64cz/vz9hzWjAXOSMC/Xm09f4SqJZOAMMzz6Xy6txJQ9dPUBWli6G6mmups46iu9+/xNNbV/TWWkr7kGmsZLD16YFkxHE4RwyXEZVoOQBfm5OObmB8LdAXQZsiwy++rDV8hcOBuYOajvMmBZv6k+BliVwa3BwwAmPqyywHIYZ6mBVQMxguUhdkQ669nbTxtPXMdqpggfF5Vdxs3BluNrgdUyTMG8WVt//fmLKQ4UEeDmpHJsepmoYc25aNb///+/fMGuzSdvoInDuX///aOyy+CtErgdmAxg8VuxYBeeugGoBdgMIcdlUzafwLTvzot3QMHdF+7ef4lenH7+/hMoteHE9T0X7h6++uDqI+z5EdnMF++/kFPS6itKIJsCYQOL2bvPQY6jFiAnzE71Z2JaDylpsbZpH73+gKukBZojHt2OtQlJ5byJ6WKyRUZdRnrQDd4wIycHfPyGpc/z9TuorwEkMWU/fQOVGl9/YpECiuNoijOQU2qQHjPk6Bi8sTnqMtLjc/CGGQD3aAQLdXBiDwAAAABJRU5ErkJggg=='
      }
    }
  )
})

module.exports = router
