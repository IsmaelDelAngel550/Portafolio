# 🚀 Instrucciones de Despliegue - Portafolio

## 📋 Configuración Actual: ismaelhda.dev

- [x] ✅ Dominio configurado: `ismaelhda.dev`
- [x] ✅ CNAME configurado
- [x] ✅ Astro config actualizado
- [x] ✅ GitHub Actions listo

## 🌍 Despliegue con Dominio Personalizado (ismaelhda.dev)

### 1. 💰 Comprar el dominio en Porkbun:
- Ve a: https://porkbun.com
- Busca: `ismaelhda.dev`
- Completa la compra

### 2. ⚙️ Configurar DNS en Porkbun:

**Registros A (para el dominio raíz @):**
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
```

**Registro CNAME (para www):**
```
Tipo: CNAME
Nombre: www
Valor: ismaeldelangel550.github.io
TTL: 300
```

### 3. 🔧 Configurar GitHub Pages:
1. Ve a: https://github.com/IsmaelDelAngel550/Portafolio/settings/pages
2. En "Custom domain" ingresa: `ismaelhda.dev`
3. Habilita "Enforce HTTPS" (después de que se verifique el dominio)

### 4. ⏱️ Esperar propagación DNS:
- Tiempo: 1-24 horas (normalmente 1-2 horas)
- Verificar en: https://dnschecker.org/
- Buscar: `ismaelhda.dev`

### 5. 🚀 ¡Tu sitio estará disponible en!:
- **https://ismaelhda.dev** (dominio principal)
- **https://www.ismaelhda.dev** (con www)

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
