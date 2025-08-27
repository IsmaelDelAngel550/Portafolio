# 🚀 Instrucciones de Despliegue - Portafolio

## 📋 Checklist Pre-Despliegue

- [x] ✅ Astro configurado correctamente
- [x] ✅ GitHub Actions configurado
- [x] ✅ Build exitoso (sin errores críticos)
- [x] ✅ CNAME configurado
- [x] ✅ README actualizado

## 🌐 Opción 1: Solo GitHub Pages (Subdominio)

### Configuración en `astro.config.mjs`:
```javascript
export default defineConfig({
  site: 'https://ismaeldelangel550.github.io',
  base: '/Portafolio', // ← DESCOMENTAR esta línea
  output: 'static'
});
```

### URL Final:
- `https://ismaeldelangel550.github.io/Portafolio`

### Pasos:
1. Descomentar la línea `base: '/Portafolio'` en astro.config.mjs
2. Eliminar el archivo `public/CNAME` 
3. Push al repositorio
4. Activar GitHub Pages en Settings → Pages

---

## 🌍 Opción 2: Dominio Personalizado (Porkbun)

### Configuración en `astro.config.mjs`:
```javascript
export default defineConfig({
  site: 'https://tu-dominio.com', // ← TU DOMINIO AQUÍ
  // base: '/Portafolio', // ← COMENTAR esta línea
  output: 'static'
});
```

### Configuración DNS en Porkbun:
```
Tipo: A
Nombre: @
Valor: 185.199.108.153
TTL: 300

Tipo: A  
Nombre: @
Valor: 185.199.109.153
TTL: 300

Tipo: A
Nombre: @
Valor: 185.199.110.153  
TTL: 300

Tipo: A
Nombre: @
Valor: 185.199.111.153
TTL: 300

Tipo: CNAME
Nombre: www
Valor: ismaeldelangel550.github.io
TTL: 300
```

### Archivo `public/CNAME`:
```
tu-dominio.com
```

### Pasos:
1. Comprar dominio en Porkbun
2. Actualizar `astro.config.mjs` con tu dominio
3. Actualizar `public/CNAME` con tu dominio
4. Configurar DNS en Porkbun (registros A y CNAME)
5. Push al repositorio
6. En GitHub → Settings → Pages → Custom domain → Ingresar tu dominio
7. Esperar propagación DNS (1-24 horas)

---

## ⚡ Comandos Útiles

```bash
# Build local para verificar
npm run build

# Preview local del build
npm run preview

# Desarrollo local
npm run dev

# Deploy manual (si GitHub Actions falla)
npm run deploy
```

---

## 🔧 Solución de Problemas

### Build falla con errores TypeScript:
- Usar `npm run build` en lugar de `npm run build:check`

### GitHub Pages no actualiza:
- Verificar que GitHub Actions esté habilitado
- Revisar la pestaña "Actions" en GitHub
- Verificar permisos en Settings → Actions

### Dominio personalizado no funciona:
- Verificar propagación DNS: https://dnschecker.org
- Revisar configuración en GitHub Pages
- Asegurar que el archivo CNAME esté en `/public/CNAME`

### Estilos no cargan:
- Verificar configuración `site` y `base` en astro.config.mjs
- Hacer rebuild completo: `rm -rf dist && npm run build`

---

## 📞 URLs Importantes

- **Repositorio**: https://github.com/IsmaelDelAngel550/Portafolio
- **GitHub Actions**: https://github.com/IsmaelDelAngel550/Portafolio/actions
- **GitHub Pages Settings**: https://github.com/IsmaelDelAngel550/Portafolio/settings/pages
- **DNS Checker**: https://dnschecker.org

---

¡Listo para despegar! 🚀
