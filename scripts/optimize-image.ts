import sharp from "sharp"
import fs from "fs"
import path from "path"

async function optimizeProfileImage() {
  const inputPath = path.join(process.cwd(), "public", "adrian-profile.jpg")
  const outputPath = path.join(process.cwd(), "public", "adrian-profile-optimized.jpg")

  try {
    // Optimizar la imagen: redimensionar y comprimir
    await sharp(inputPath)
      .resize(400, 400, {
        fit: "cover",
        position: "center",
      })
      .jpeg({
        quality: 85,
        progressive: true,
      })
      .toFile(outputPath)

    // Obtener información de los archivos
    const originalStats = fs.statSync(inputPath)
    const optimizedStats = fs.statSync(outputPath)

    const originalSize = (originalStats.size / 1024).toFixed(2)
    const optimizedSize = (optimizedStats.size / 1024).toFixed(2)
    const reduction = (((originalStats.size - optimizedStats.size) / originalStats.size) * 100).toFixed(1)

    console.log("🖼️  Optimización de imagen completada:")
    console.log(`📏 Tamaño original: ${originalSize} KB`)
    console.log(`📏 Tamaño optimizado: ${optimizedSize} KB`)
    console.log(`📉 Reducción: ${reduction}%`)
    console.log(`✅ Imagen guardada en: ${outputPath}`)
  } catch (error) {
    console.error("❌ Error al optimizar la imagen:", error)
  }
}

optimizeProfileImage()
