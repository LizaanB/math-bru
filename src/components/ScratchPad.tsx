import { useRef, useState, useEffect } from 'react'

interface ScratchPadProps {
  isExpanded: boolean
  onToggle: () => void
}

export default function ScratchPad({ isExpanded, onToggle }: ScratchPadProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [color, setColor] = useState('#000000')
  const [lineWidth, setLineWidth] = useState(3)
  const [tool, setTool] = useState<'pen' | 'eraser'>('pen')

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Set white background
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
  }, [isExpanded])

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return

    setIsDrawing(true)
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const rect = canvas.getBoundingClientRect()
    const x = 'touches' in e ? e.touches[0].clientX - rect.left : e.clientX - rect.left
    const y = 'touches' in e ? e.touches[0].clientY - rect.top : e.clientY - rect.top

    ctx.beginPath()
    ctx.moveTo(x, y)
  }

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const rect = canvas.getBoundingClientRect()
    const x = 'touches' in e ? e.touches[0].clientX - rect.left : e.clientX - rect.left
    const y = 'touches' in e ? e.touches[0].clientY - rect.top : e.clientY - rect.top

    if (tool === 'eraser') {
      ctx.strokeStyle = '#ffffff'
      ctx.lineWidth = lineWidth * 3
    } else {
      ctx.strokeStyle = color
      ctx.lineWidth = lineWidth
    }

    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    ctx.lineTo(x, y)
    ctx.stroke()
  }

  const stopDrawing = () => {
    setIsDrawing(false)
  }

  const clearCanvas = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
  }

  if (!isExpanded) {
    return (
      <button
        onClick={onToggle}
        className="fixed bottom-4 right-4 bg-purple-500 hover:bg-purple-600 text-white rounded-full p-4 shadow-lg transition-all z-50"
        title="Open Scratch Pad"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      </button>
    )
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white rounded-xl shadow-2xl border-2 border-gray-200 z-50 flex flex-col" style={{ width: '400px', maxWidth: '90vw' }}>
      {/* Header */}
      <div className="flex justify-between items-center p-3 border-b border-gray-200 bg-gradient-to-r from-purple-50 to-blue-50 rounded-t-xl">
        <h3 className="font-bold text-gray-800 flex items-center">
          <span className="mr-2">📝</span>
          Scratch Pad
        </h3>
        <button
          onClick={onToggle}
          className="text-gray-500 hover:text-gray-700 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Canvas */}
      <div className="p-4 bg-gray-50">
        <canvas
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
          className="border-2 border-gray-300 rounded-lg cursor-crosshair bg-white touch-none"
          style={{ width: '100%', height: '300px' }}
        />
      </div>

      {/* Toolbar */}
      <div className="p-3 border-t border-gray-200 bg-white rounded-b-xl">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setTool('pen')}
              className={`p-2 rounded-lg transition-all ${tool === 'pen' ? 'bg-purple-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              title="Pen"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </button>
            <button
              onClick={() => setTool('eraser')}
              className={`p-2 rounded-lg transition-all ${tool === 'eraser' ? 'bg-purple-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              title="Eraser"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>

          <button
            onClick={clearCanvas}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-all text-sm font-semibold"
          >
            🗑️ Clear
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <label className="text-sm text-gray-600">Color:</label>
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="w-10 h-10 rounded cursor-pointer border-2 border-gray-300"
            />
          </div>

          <div className="flex items-center space-x-2 flex-1">
            <label className="text-sm text-gray-600">Size:</label>
            <input
              type="range"
              min="1"
              max="10"
              value={lineWidth}
              onChange={(e) => setLineWidth(Number(e.target.value))}
              className="flex-1"
            />
            <span className="text-sm text-gray-600 w-6">{lineWidth}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
